import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateData from "../../components/updateData/UpdateData";
import ReactPlayer from "react-player";

export const FarmerCommunity = () => {
    const [data, setData] = useState([]);
    const [currentItem, setCurrentItem] = useState(""); // State to hold the fetched data

    useEffect(() => {
        const config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "http://localhost:7000/experince/get",
        };

        axios
            .request(config)
            .then((response) => {
                console.log("Fetched Data:", response.data);
                setData(response.data.data);
            })
            .catch((error) => {
                console.error("Axios error:", error);
            });
    }, []);

    const onUpdateHandler = (data) => {
        console.log(data);
        setCurrentItem(data);
    };

    const onDeleteHander = (id) => {
        console.log("id in delete component", id);

        let config = {
            method: "delete",
            maxBodyLength: Infinity,
            url: `http://localhost:7000/experience/delete/${id}`,
            headers: {},
        };

        axios
            .request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
                Farmer Community Data
            </h2>

            {data.length === 0 && (
                <p className="text-center text-gray-500 text-lg">
                    No data available.
                </p>
            )}

            {data.length > 0 && (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((item) => (
                        <li
                            key={item._id}
                            className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="relative overflow-hidden">
                                {/* ReactPlayer: Display video with clean UI */}
                                <ReactPlayer
                                    url={item.image}
                                    controls={false}  // Disable YouTube controls
                                    light={true}      // Display a thumbnail
                                    width="100%"      // Full width
                                    height="200px"    // Fixed height for consistency
                                    style={{
                                        borderRadius: "8px",
                                    }}
                                />
                            </div>

                            <div className="p-6">
                                {/* Title */}
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-4">
                                    {item.description}
                                </p>

                                {/* Actions */}
                                <div className="flex justify-between items-center mt-4">
                                    {/* Delete Button */}
                                    <button
                                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
                                        onClick={() => onDeleteHander(item._id)}
                                    >
                                        Delete
                                    </button>

                                    {/* Update Button */}
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
                                        onClick={() => onUpdateHandler(item)}
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                    <UpdateData currItem={currentItem} />
                </ul>
            )}
        </div>
    );
};
