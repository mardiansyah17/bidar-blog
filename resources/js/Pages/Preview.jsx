import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import Button from "@/Components/Button";
import { Link } from "@inertiajs/inertia-react";

export default function Preview(props) {
    const [blog, setBlog] = useState({
        title: "",
        content: "",
    });

    useEffect(() => {
        let dataPreview = JSON.parse(localStorage.getItem("blog"));
        setBlog({
            title: dataPreview.title,
            content: dataPreview.content,
        });
    }, []);
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <div className="p-3 pb-1 w-full h-full   ">
                <div className=" w-[65%]  mx-auto overflow-y-auto bg-white h-[100%]">
                    <div className="flex w-full justify-center items-center relative">
                        <h1 className="text-xl mt-5 font-semibold">
                            {blog.title}
                        </h1>
                        <div className="  absolute top-0 right-0 px-3">
                            <button className="ml-3 bg-green-500 mt-3 rounded-lg hover:bg-green-600 active:bg-green-500 text-white px-2 py-1">
                                Posting
                            </button>
                            <Link
                                href="/post-blog"
                                className="ml-3 bg-orange-500 mt-3 rounded-lg hover:bg-orange-600 active:bg-orange-500 text-white px-2 py-1"
                            >
                                Edit
                            </Link>
                        </div>
                    </div>

                    <div
                        className="px-3 "
                        dangerouslySetInnerHTML={{
                            __html: blog.content,
                        }}
                    ></div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
