import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/inertia-react";
import gambar from "/public/assets/img/images/mark.jpg";
import Nav from "@/Components/Nav";
import Button from "@/Components/Button";
import { useState } from "react";
export default function Blog(props) {
    const { blog } = props;
    const { user } = props;
    const { flash } = usePage().props;
    const [coment, setComent] = useState("");

    useEffect(() => {
        if (flash.success != null) {
            localStorage.removeItem("blog");
        }
    }, []);

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <div className="pb-10">
                <Nav />
                <div className="mt-5 px-2 lg:w-[70%] mx-auto">
                    <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                        {blog.title}
                    </h1>
                    <small className="text-xs sm:text-sm lg:text-lg px-10">
                        <a href="">{user.name}</a> |{" "}
                        {new Date(blog.created_at).toLocaleDateString("id-ID")}
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
                    <div className="mt-5 flex flex-col items-center">
                        <textarea
                            placeholder="Tuliskan komentar anda tentang blog ini"
                            name="content"
                            id=""
                            rows="4"
                            className="border-orange-500 focus:border-orange-600 w-[80%] mx-auto rounded-lg mt-3 mb-4"
                            value={coment}
                            onChange={(e) => setComent(e.target.value)}
                        ></textarea>
                        <Button
                            method={"post"}
                            data={{ coment: coment, blog_id: blog.id }}
                            url="/coment"
                            title={"Kirim"}
                        />
                    </div>
                    <div className="">
                        {blog.coments.map((coment) => {
                            return (
                                <div key={coment.id} className="mb-3">
                                    <div className="flex space-x-3 items-center">
                                        <h1 className="text-lg font-semibold">
                                            {coment.user[0].name}
                                        </h1>
                                        <span>
                                            {new Date(
                                                coment.created_at
                                            ).toLocaleDateString("id-ID")}
                                        </span>
                                    </div>
                                    <p>{coment.coment}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
