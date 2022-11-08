import React from "react";
import bidarBlogLogo from "../../../public/assets/img/logo-bidar-blog.png";
import NavLink from "./../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/NavLink";
import Dropdown from "./../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/Dropdown";
import { Link } from "@inertiajs/inertia-react";
import ResponsiveNavLink from "./../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/ResponsiveNavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Nav({ auth, drawerHandler }) {
    return (
        <div className="navbar justify-between px-10 bg-transparent shadow-sm border-b border-gray-200">
            <div className="">
                <img src={bidarBlogLogo} className="w-8" alt="" />
            </div>
            <label htmlFor="my-drawer" className="drawer-overlay sm:hidden">
                <FontAwesomeIcon icon={faBars} size="lg" />
            </label>
            <ul className="space-x-5 font-semibold hidden sm:flex">
                <li>
                    <Link href="/all-blog">Semua Blog</Link>
                </li>
                <li>
                    <Link>Kategori</Link>
                </li>
                <li>
                    <Link>Tentang kami</Link>
                </li>
                <li>
                    <Link>Profile</Link>
                </li>
            </ul>
        </div>
    );
}
