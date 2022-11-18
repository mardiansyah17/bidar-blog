import React from "react";

export default function InputText({ placeholder }) {
    return (
        <>
            <input
                type="text"
                placeholder={placeholder}
                className="border-orange-500 w-[80%] mx-auto rounded-lg"
            />
        </>
    );
}
