import React from "react";

export default function SideBar({ findBlog }) {
    return (
        <div className="bg-white border-r shadow-sm h-full border-gray-200 w-1/4 flex flex-col items-center px-3">
            <input
                onChange={findBlog}
                type="text"
                placeholder="Cari blog"
                className="ring-1 ring-blue-400 focus:ring-blue-500 h-8 w-full mt-3  rounded-xl"
            />

            <select
                name=""
                className="ring-1 ring-blue-400 focus:ring-blue-500 rounded-xl mt-3 w-full"
                id=""
            >
                <option value="">Semua</option>
                <option value="">Berita</option>
                <option value="">Tutorial</option>
                <option value="">Tips dan Trik</option>
            </select>
        </div>
    );
}
