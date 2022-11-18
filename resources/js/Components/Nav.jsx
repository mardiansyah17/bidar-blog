import React from "react";
import bidarBlogLogo from "../../../public/assets/img/logo-bidar-blog.png";
import NavLink from "./../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/NavLink";
import Dropdown from "./../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/Dropdown";
import { Link } from "@inertiajs/inertia-react";
import ResponsiveNavLink from "./../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/ResponsiveNavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Route from "./../../../vendor/tightenco/ziggy/src/js/Route";
import Button from "./Button";
export default function Nav({ auth, drawerHandler }) {
    let currentRoute = route().current();
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
                        <Link href="/all-blog">Semua Blog</Link>
                    </li>
                    <li
                        className={`${
                            currentRoute == "categories"
                                ? "text-orange-500"
                                : "text-slate-700"
                        }`}
                    >
                        <Link href="/categories">Kategori</Link>
                    </li>
                    <li
                        className={`${
                            currentRoute == "about"
                                ? "text-orange-500"
                                : "text-slate-700"
                        }`}
                    >
                        <Link>Tentang kami</Link>
                    </li>
                </ul>
                <div className="hidden">
                    <Button title={"Buat Blog"} url="/create-blog" />
                </div>
            </div>
            <label htmlFor="my-drawer" className="drawer-overlay sm:hidden">
                <FontAwesomeIcon
                    icon={faBars}
                    className="btn btn-ghost btn-circle btn-xs p-3"
                />
            </label>
        </div>
    );
}
