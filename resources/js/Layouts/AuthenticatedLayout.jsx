import React, { useState } from "react";
import DrawerItemMenu from "@/Components/DrawerItemMenu";
import Button from "@/Components/Button";
import profile from "/public/assets/img/images/mark.jpg";
import { Link } from "@inertiajs/inertia-react";

export default function Authenticated({ auth, header, children }) {
    const [openDrawer, setOpenDrawer] = useState(false);
    function drawerHandler() {
        openDrawer ? setOpenDrawer(false) : setOpenDrawer(true);
    }

    return (
        <div className={`h-screen`}>
            <div className="drawer drawer-end">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content h-full ">
                    <main className="basis-[100%] h-full">{children}</main>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer"
                        className="drawer-overlay"
                    ></label>
                    <div className="flex flex-col  p-4 w-80 bg-base-100 text-base-content">
                        {auth.user ? (
                            <Link href="/profile" className="flex items-center">
                                <img
                                    src={profile}
                                    className="w-14 h-14 rounded-full mr-3"
                                    alt=""
                                />
                                <h2>{auth.user.name}</h2>
                            </Link>
                        ) : (
                            <Button url={"/login"} title="Login" />
                        )}
                        <DrawerItemMenu
                            title="Home"
                            routeName={"guest"}
                            url="/"
                        />

                        <DrawerItemMenu
                            title="Telusuri"
                            routeName={"all-blog"}
                            url="/all-blog"
                        />
                        <DrawerItemMenu
                            title="Tentang Kami"
                            routeName={"about"}
                            url="/about"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
