from flask import Flask, request, jsonify
from transformers import GPT2LMHeadModel, GPT2Tokenizer

# Initialize Flask app
app = Flask(__name__)

# Load GPT-2 model and tokenizer
model_name = "gpt2"  # You can also use "gpt2-medium"
tokenizer = GPT2Tokenizer.from_pretrained(model_name)
model = GPT2LMHeadModel.from_pretrained(model_name)

# Root route for testing
@app.route('/', methods=['GET'])
def home():
    return "Welcome to the GPT-2 API! Use the /generate endpoint to get text responses."

# Route to generate text using GPT-2
@app.route('/generate', methods=['POST'])
def generate_text():
    # Get input text from the React app
    input_data = request.json
    input_text = input_data.get("prompt", "")

    # Encode input and generate response
    inputs = tokenizer.encode(input_text, return_tensors="pt")
    outputs = model.generate(inputs, max_length=50, num_return_sequences=1)
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)

    # Send the response back to React
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
