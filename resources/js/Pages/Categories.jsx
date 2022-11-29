import Nav from "@/Components/Nav";
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CardCategory from "./../Components/CardCategory";
import techBg from "/public/assets/img/programing1.jpg";
export default function Categories(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <div className="h-screen flex flex-col">
                <div className="basis-10">
                    <Nav />
                </div>
                <div className="flex flex-col items-center mt-3 sm:flex-row sm:flex-wrap sm:justify-center ">
                    <CardCategory cover={techBg} title="Teknologi" />
                    <CardCategory cover={techBg} title="Politik" />
                    <CardCategory cover={techBg} title="Kesehatan" />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
