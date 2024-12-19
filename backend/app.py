from flask import Flask, request, jsonify
from transformers import GPT2LMHeadModel, GPT2Tokenizer
from flask_cors import CORS
import os
import re
from markdown import markdown

# Initialize Flask app
app = Flask(__name__)
CORS(app) 
# Load the fine-tuned GPT-2 model and tokenizer
model_dir = os.path.join(os.getcwd(), "gpt2-agriculture")

# Ensure the model directory exists
if not os.path.exists(model_dir):
    print(f"Model directory {model_dir} does not exist!")

tokenizer = GPT2Tokenizer.from_pretrained(model_dir)
model = GPT2LMHeadModel.from_pretrained(model_dir)

# Root route for testing
@app.route('/', methods=['GET'])
def home():
    return "Welcome to the GPT-2 API! Use the /generate endpoint to get text responses."

# Route to generate text using GPT-2
@app.route('/generate', methods=['POST'])
def generate_text():
    # Get input text from the request
    input_data = request.json
    input_text = input_data.get("prompt", "")

    # Encode input and generate response
    inputs = tokenizer.encode(input_text, return_tensors="pt")
    outputs = model.generate(inputs, max_length=100, num_return_sequences=1, eos_token_id=tokenizer.eos_token_id,no_repeat_ngram_size=3,temperature=0.7,top_k=50,)
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    if response.lower().startswith(input_text.lower()):
        response = response[len(input_text):].strip()
        
        # Add new lines before each heading
    # response = re.sub(r"(- \*\*[^:]+\*\*:)", r"\n\1", response).strip()

    # # Replace **text** with <strong>text</strong>
    # response = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", response)
    
    response = re.sub(r"(?<!\*)\*(?!\*)", "", response)  # Remove stray single asterisks
    response = re.sub(r"\*\*+", "**", response)  # Ensure balanced ** pairs
    response = re.sub(r"\n\s*\n", "\n", response)  # Remove excessive newlines
    response = re.sub(r"^\s+|\s+$", "", response)  # Trim leading/trailing spaces

    try:
        # Convert Markdown to HTML
        html_response = markdown(response)
    except Exception as e:
        print(f"Markdown conversion error: {e}")
        html_response = response  # Fallback to raw text

    print("Raw response:", response)
    print("HTML response:", html_response)

    return jsonify({"response": html_response})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
