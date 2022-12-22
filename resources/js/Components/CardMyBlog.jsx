import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
export default function CardMyBlog({ title, slug, cover, date, children }) {
    return (
        <Link
            href={`/blog/${slug}`}
            className="flex items-center rounded-lg  justify-between mb-3 p-2 border border-gray-200 shadow-lg mx-2"
        >
            <div className="flex items-center">
                <img src={cover} className="w-14 sm:w-24" alt="" />
                <div className="ml-3">
                    <h2 className="text-lg sm:text-xl">{title}</h2>
                    <small className="text-xs sm:text-sm">
                        {new Date(date).toLocaleDateString("id-ID")}
                    </small>
                </div>
            </div>
            {children}
        </Link>
    );
}
