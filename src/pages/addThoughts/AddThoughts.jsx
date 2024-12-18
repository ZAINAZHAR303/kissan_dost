import { useState } from "react";
import axios from "axios"; // Move axios to the top for cleaner code

export const AddThoughts = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [message, setMessage] = useState(""); // For success/error messages

    const onAddProductHandler = async () => {
        try {
            setMessage(""); // Reset the message
            console.log("Sending request with:", { title, description, image });

            let response = await axios.post("http://localhost:7000/experience/post", {
                title: title,
                description: description,
                image: image
            });

            console.log("Server Response:", response.data);

            // Check for success status
            if (response.data.status === "success") {
                setMessage("Thought added successfully!");
                setTitle("");
                setDescription("");
                setImage("");
            } else {
                setMessage("Failed to add thought. Try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred while submitting. Please try again later.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                    Add Your Thoughts
                </h2>
                <form className="space-y-4">
                    {/* Title Input */}
                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-1">
                            Thought Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter your thought title"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Description Input */}
                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-1">
                            Thought Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter your thought description"
                            rows="3"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    {/* Image Input */}
                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-1">
                            Image URL
                        </label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="Enter image URL"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={onAddProductHandler}
                            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit Thoughts
                        </button>
                    </div>

                    {/* Success/Error Message */}
                    {message && (
                        <p className="text-center mt-4 text-sm font-semibold text-red-500">
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};
