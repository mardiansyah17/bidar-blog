import React from "react";
import bidarBlogLogo from "../../../public/assets/img/logo-bidar-blog.png";
import { Link, usePage } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import avatar from "/public/assets/img/avatar.jpg";
export default function Nav({ drawerHandler }) {
    let currentRoute = route().current();
    const { auth } = usePage().props;
    return (
        <div className="navbar justify-between sm:justify-start  px-10 bg-transparent shadow-sm border-b border-gray-200">
            <Link href="/" className="mr-4">
                <img src={bidarBlogLogo} className="w-8" alt="" />
            </Link>
            <div className=" w-full flex justify-between">
                <ul className="space-x-5 font-semibold hidden sm:flex">
                    <li
                        className={`${
                            currentRoute == "guest"
                                ? "text-orange-500"
                                : "text-slate-700"
                        }`}
                    >
                        <Link href="/">Home</Link>
                    </li>
                    <li
                        className={`${
                            currentRoute == "all-blog"
                                ? "text-orange-500"
                                : "text-slate-700"
                        }`}
                    >
                        <Link href="/all-blog">Telusuri</Link>
                    </li>

                    <li
                        className={`${
                            currentRoute == "about"
                                ? "text-orange-500"
                                : "text-slate-700"
                        }`}
                    >
                        <Link href="/about">Tentang kami</Link>
                    </li>
                </ul>
            </div>
            {/*  */}
            {auth.user ? (
                <div className="dropdown dropdown-end hidden sm:block">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full border border-gray-200">
                            <img src={avatar} />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li className="mb-2 border-b border-gray-300 pl-2">
                            <Link href={`/profile`} className="justify-between">
                                Profile
                            </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-300 pl-2">
                            <Link href={`/my-blog/${auth.user.id}`}>
                                Blog saya
                            </Link>
                        </li>
                        <li className="mb-2 border-b border-gray-300 pl-2">
                            <Link as="button" method="post" href="/logout">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="hidden sm:block">
                    <Button url={"/login"} title="Login" />
                </div>
            )}
            {/*  */}

            <label htmlFor="my-drawer" className="drawer-overlay sm:hidden">
                <FontAwesomeIcon
                    icon={faBars}
                    className="btn btn-ghost btn-circle btn-xs p-3"
                />
            </label>
        </div>
    );
}
