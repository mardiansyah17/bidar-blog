import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/inertia-react";
import gambar from "/public/assets/img/images/mark.jpg";
import Nav from "@/Components/Nav";
export default function Blog(props) {
    const { blog } = props;
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success != null) {
            localStorage.removeItem("blog");
        }
    }, []);

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <div className="">
                <Nav />
                <div className="mt-5 px-2 lg:w-[70%] mx-auto">
                    <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                        {blog.title}
                    </h1>
                    <small className="text-xs sm:text-sm lg:text-lg px-10">
                        <a href="">Muhammad Mardiansyah </a>| 18 November 2022
                    </small>
                    <img
                        src={blog.cover_url}
                        className="w-[60%] mx-auto mt-3"
                        alt=""
                    />
                    <div
                        className="mt-3 px-10"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    ></div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
