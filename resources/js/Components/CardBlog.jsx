import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export default function CardBlog({ blog }) {
    const [loadImage, setLoadImage] = useState(true);
    function handleImageLoad() {}
    useEffect(() => {}, []);
    return (
        <div
            className="bg-white border border-gray-300 shadow-lg mb-3 rounded-lg w-[21rem]
         sm:w-[22.5rem] lg:w-96 sm:mr-2"
        >
            <div className="h-full px-2 py-3 flex flex-col justify-between">
                <div
                    className={`${
                        loadImage ? "lds-dual-ring mx-auto " : "hidden"
                    }`}
                ></div>
                <img
                    className={`${loadImage ? "hidden" : ""}`}
                    src={`${blog.cover_url}`}
                    alt=""
                    onLoad={(e) => {
                        setLoadImage(false);
                    }}
                />
                <h1 className="text-lg leading-5 mt-3 text-center  font-semibolzd mb-3 ">
                    {blog.title}
                </h1>
                <p className="text-sm">{blog.description}</p>
                <div className="flex justify-center  ">
                    <Link
                        href={`/blog/${blog.slug}`}
                        className="bg-orange-500 rounded-lg hover:bg-orange-600 active:bg-orange-500 text-white px-2 py-1"
                    >
                        Baca
                    </Link>
                </div>
            </div>
        </div>
    );
}
