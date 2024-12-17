import { useEffect, useState } from "react";
import axios from "axios";


const UpdateData = ({ currItem }) => {
    console.log("data in update component", currItem);
    //console.log("base url",process.env.REACT_APP_API_BASE_URL);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    // Initialize state with current item data when component mounts or currItem changes
    useEffect(() => {
        setTitle(currItem.title);
        setDescription(currItem.description);
        setImage(currItem.image);
        
    }, [currItem]);

    // Function to handle data update in the database
    const updateDataFromDatabase = async () => {
        
        try {
            
            // Preparing the data to send in the PUT request
            const data = JSON.stringify({
                "_id": currItem._id,  // Ensure to send the current item's ID
                "title": title,
                "description": description,
                "image": image
            });
            
            // Axios PUT request
            const response = await axios.put(
                
                
                `http://localhost:7000/experience/update/${currItem._id}`,
                data,
                { headers: { 'Content-Type': 'application/json' } }
                
            );
            
            // Handle response (e.g., display success message, etc.)
            console.log("Data updated successfully:", response.data);
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Update Information</h2>
            <div className="space-y-4">
                {/* Title Input */}
                <div>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter Title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Description Input */}
                <div>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter Description"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Image Input */}
                <div>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="Enter Image URL"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Update Button */}
                <div>
                    <button
                        onClick={updateDataFromDatabase}  // Trigger the update function
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Update Data
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateData;
