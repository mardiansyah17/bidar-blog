import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/inertia-react";

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
            <div className="p-3 pb-1 w-full h-full   ">
                <div className=" w-[65%]  mx-auto overflow-y-auto bg-white h-[100%]">
                    <div className="flex w-full justify-center items-center relative">
                        <h1 className="text-xl mt-5 font-semibold">
                            {blog.title}
                        </h1>
                    </div>

                    <div
                        className="px-3"
                        dangerouslySetInnerHTML={{
                            __html: blog.content,
                        }}
                    ></div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
