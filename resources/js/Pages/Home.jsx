import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Hero from "@/Components/home/Hero";
import Nav from "@/Components/Nav";
import decoration1 from "/public/assets/img/decoration-hero-1.png";

export default function Home(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <div className="h-screen flex flex-col">
                <div className="basis-10">
                    <Nav />
                </div>
                <div className="flex flex-col  items-center px-3 w-full justify-center basis-full sm:flex-row lg:space-x-20">
                    <Hero />
                    {/* <img
                        src={decoration1}
                        className="absolute bottom-0 sm:bottom-10 right-0 w-32 sm:w-40 lg:w-52"
                        alt=""
                    /> */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
