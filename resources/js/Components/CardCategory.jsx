import React from "react";

export default function CardCategory({ cover, title }) {
    return (
        <div className=" bg-gradient-to-br from-orange-600 via-yellow-400 to-orange-400 border border-gray-300 shadow-lg mb-3 rounded-lg w-72 lg:w-96  sm:w-80 mr-4 p-3">
            <div className="flex items-center">
                <img
                    src={cover}
                    alt=""
                    className="w-24 h-24 rounded-full mr-3"
                />
                <h1 className="lg:text-xl sm:text-lg">{title}</h1>
            </div>
        </div>
    );
}
