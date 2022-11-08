import React, { useState } from "react";
import Nav from "@/Components/Nav";
export default function Authenticated({
    auth,
    header,
    children,
    currentRoute,
}) {
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
                <div className="drawer-content h-full">
                    <main className="basis-[100%] h-full">{children}</main>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li>
                            <a>Sidebar Item 1</a>
                        </li>
                        <li>
                            <a>Sidebar Item 2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
