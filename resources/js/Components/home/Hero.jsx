import { Link } from "@inertiajs/inertia-react";
import React from "react";
import heroImg from "/public/assets/img/hero-img.png";
import Button from "./../Button";
export default function Hero() {
    return (
        <>
            <div className="">
                <img src={heroImg} className="w-52 sm:w-64 lg:w-80" alt="" />
            </div>
            <div className="">
                <div className="text-center text-3xl sm:text-4xl lg:text-5xl sm:flex sm:space-x-3  sm:justify-center ">
                    <h1 className="text-slate-800">Welcome</h1>
                    <h1 className="text-main-100">BidarBlog</h1>
                </div>
                <div className="flex justify-center lg:text-xl mt-3 text-center space-x-3">
                    <Button title={"Baca Blog sekarang"} url="/all-blog" />
                    <Button title={"Buat Blog sekarang"} url="/create-blog" />
                </div>
            </div>
        </>
    );
}
