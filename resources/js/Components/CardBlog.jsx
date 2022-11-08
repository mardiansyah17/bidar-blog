import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NavLink from "./NavLink";
import cover from "/public/storage/images/1ufcTjfXHgxJQe9Z0ChqE03PAJpGeYVVAdkhhtvN.png";
export default function CardBlog() {
    const [loadImage, setLoadImage] = useState(true);
    function handleImageLoad() {}
    useEffect(() => {}, []);
    return (
        <div className="bg-white border border-gray-300 shadow-lg mb-3 rounded-lg w-52 sm:w-80 lg:w-96 ">
            <div className="h-full px-2 py-3 flex flex-col justify-between">
                <div
                    className={`${
                        loadImage ? "lds-dual-ring mx-auto " : "hidden"
                    }`}
                ></div>
                <img
                    className={`${loadImage ? "hidden" : ""}`}
                    src={cover}
                    alt=""
                    onLoad={(e) => {
                        setLoadImage(false);
                        console.log("selesai");
                    }}
                />
                <h1 className="text-lg leading-5 mt-3 text-center  font-semibolzd mb-3 ">
                    Ini adalah sebuah judul hahahah
                </h1>

                <div className="flex justify-center  ">
                    <Link
                        href={`/blog/$slug`}
                        className="bg-orange-500 rounded-lg hover:bg-orange-600 active:bg-orange-500 text-white px-2 py-1"
                    >
                        Baca
                    </Link>
                </div>
            </div>
        </div>
    );
}