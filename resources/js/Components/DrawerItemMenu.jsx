import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function DrawerItemMenu({ routeName, title, url }) {
    let currentRoute = route().current();

    return (
        <Link
            className={`${
                currentRoute == routeName ? "text-orange-500" : "text-slate-700"
            }
           hover:bg-black hover:bg-opacity-10 py-3 px-2 rounded-lg
            `}
            href={url}
        >
            {title}
        </Link>
    );
}
