import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Button({ title, url, className, method, data }) {
    return (
        <>
            {!method ? (
                <Link
                    href={url}
                    className={`px-3  py-2 text-slate-200 rounded-lg bg-main-100 hover:bg-main-100 ${className}`}
                >
                    {title}
                </Link>
            ) : (
                <Link
                    href={"/upload-blog"}
                    method={method}
                    data={data}
                    as="button"
                    className={`px-3  py-2 text-slate-200 rounded-lg bg-main-100 hover:bg-main-100 ${className}`}
                >
                    {title}
                </Link>
            )}
        </>
    );
}
