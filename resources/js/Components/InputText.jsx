import React from "react";

export default function InputText({ placeholder, valueHandler, value, type }) {
    return (
        <>
            <input
                value={value}
                type={type ? type : "text"}
                onChange={valueHandler}
                placeholder={placeholder}
                className="border-orange-500 w-[80%] mx-auto rounded-lg"
            />
        </>
    );
}
