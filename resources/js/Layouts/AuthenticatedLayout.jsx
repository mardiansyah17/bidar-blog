import React, { useState } from "react";
import Nav from "@/Components/Nav";
import { Link } from "@inertiajs/inertia-react";
import DrawerItemMenu from "@/Components/DrawerItemMenu";
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
                        <DrawerItemMenu
                            title="Home"
                            routeName={"guest"}
                            url="/"
                        />
                        <DrawerItemMenu
                            title="Kategori"
                            routeName={"categories"}
                            url="/categories"
                        />
                        <DrawerItemMenu
                            title="Semua Blog"
                            routeName={"all-blog"}
                            url="/all-blog"
                        />
                        <DrawerItemMenu
                            title="Tentang Kami"
                            routeName={"about"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
