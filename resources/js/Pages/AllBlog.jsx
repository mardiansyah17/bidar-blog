import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Nav from "@/Components/Nav";
import CardBlog from "@/Components/CardBlog";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";

export default function AllBlog(props) {
    console.log(props);
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Nav />
            <div className="w-full lg:w-4/5 lg:mx-auto px-3 mt-3 flex flex-col items-center sm:items-baseline sm:space-x-3 sm:flex-row ">
                <div className="mb-3 w-full">
                    <select
                        name=""
                        className="w-full border-orange-400 rounded-lg focus:border-orange-500 "
                        id=""
                    >
                        <option value="">Urutkan</option>
                        <option value="">Terbaru</option>
                        <option value="">Populer</option>
                    </select>
                </div>
                <div className="w-full">
                    <input
                        className="w-full  border-orange-400 rounded-lg focus:border-orange-500 "
                        type="text"
                        placeholder="Cari judul Blog"
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-center space-x-3 mt-5 ">
                {props.blogs.map((blog) => {
                    return (
                        <CardBlog
                            key={`blogId.${blog.id}`}
                            title={blog.title}
                            slug={blog.slug}
                        />
                    );
                })}
            </div>
        </AuthenticatedLayout>
    );
}
