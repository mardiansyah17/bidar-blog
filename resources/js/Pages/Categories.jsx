import Nav from "@/Components/Nav";
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CardCategory from "./../Components/CardCategory";
import techBg from "/public/storage/images/tech.jpg";
import politicBg from "/public/storage/images/politic.jpg";
import health from "/public/storage/images/health.jpg";
export default function Categories(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <div className="h-screen flex flex-col">
                <div className="basis-10">
                    <Nav />
                </div>
                <div className="flex flex-col items-center mt-3 sm:flex-row sm:flex-wrap sm:justify-center ">
                    <CardCategory cover={techBg} title="Teknologi" />
                    <CardCategory cover={politicBg} title="Politik" />
                    <CardCategory cover={health} title="Kesehatan" />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
