import React from "react";

export default function CardContribution({ img, name, skil, nim }) {
    return (
        <div className="w-80 bg-white shadow-lg sm:mr-3 mb-3 rounded-lg border border-gray-300 p-3">
            <img src={img} className="h-60 w-60 mx-auto" alt="" />
            <h1 className="font-semibold text-lg mt-3">{name}</h1>
            <h4>{nim}</h4>
            <h5>{skil}</h5>
        </div>
    );
}
