import React from "react";

export default function InputSelect({ valueHandler, categories, value }) {
    return (
        <>
            <select
                value={value}
                onChange={valueHandler}
                className="border-orange-500 w-[80%] mx-auto rounded-lg mt-3"
            >
                <option value="" disabled>
                    Kategori
                </option>
                {categories.map((data) => {
                    return (
                        <option key={`category_id.${data.id}`} value={data.id}>
                            {data.name}
                        </option>
                    );
                })}
            </select>
        </>
    );
}
