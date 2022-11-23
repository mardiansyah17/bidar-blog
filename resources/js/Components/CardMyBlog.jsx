import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

import mark from "/public/assets/img/images/mark.jpg";
export default function CardMyBlog({ title, slug }) {
    return (
        <Link
            href={`/blog/${slug}`}
            className="flex items-center rounded-lg  justify-between  p-2 border border-gray-200 shadow-lg mx-2"
        >
            <div className="flex items-center">
                <img src={mark} className="w-14 sm:w-24" alt="" />
                <div className="ml-3">
                    <h2 className="text-lg sm:text-xl">{title}</h2>
                    <small className="text-xs sm:text-sm">
                        12 November 2022
                    </small>
                </div>
            </div>
            <div className="">
                <Link
                    href={`/edit-blog/${slug}`}
                    className="text-sm btn btn-ghost btn-circle btn-sm sm:text-sm sm:btn-lg"
                >
                    <FontAwesomeIcon className="" icon={faPen} />
                </Link>
                <Link className="text-sm btn btn-ghost btn-circle btn-sm sm:text-sm sm:btn-lg">
                    <FontAwesomeIcon className="" icon={faTrash} />
                </Link>
            </div>
        </Link>
    );
}
