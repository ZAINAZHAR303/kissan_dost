import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaRobot } from "react-icons/fa"; // Importing icons

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false); // To show a loading state

  const submitHandle = async () => {
    if (!input.trim()) return; // Prevent empty input
    setLoading(true); // Start loading
    try {
      const data = JSON.stringify({ prompt: input });

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:5000/generate",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      setOutput(response.data.response);
    } catch (error) {
      console.error(error);
      setOutput("Sorry, something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ChatBot</h1>
      <div className="flex items-center gap-2">
        <input
          type="text"
          name="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="border border-gray-300 rounded-md px-4 py-2 flex-grow"
        />
        <button
          onClick={submitHandle}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
      <div className="mt-4 space-y-4">
        {input && (
          <div className="flex items-start gap-2">
            <FaUser className="text-blue-500 mt-1" />
            <p className="bg-gray-100 px-4 py-2 rounded-md">{input}</p>
          </div>
        )}
        {output && (
          <div className="flex items-start gap-2">
            <FaRobot className="text-green-500 mt-1" />
            <p className="bg-gray-100 px-4 py-2 rounded-md">{output}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
