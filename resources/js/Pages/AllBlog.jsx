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
import { useState } from "react";
import { useEffect } from "react";

export default function AllBlog(props) {
    const [categories] = useState(props.categories);
    const [blogs, setBlogs] = useState(props.blogs);
    const [loading, setLoading] = useState(false);
    function showByCategory(e) {
        let categorySelected = e.target.value;
        if (categorySelected != "all") {
            const blogByCategory = props.blogs.filter((blog) => {
                return blog.category_id == categorySelected;
            });
            setBlogs(blogByCategory);
        } else {
            setBlogs(props.blogs);
        }
    }

    function searchHandler(e) {
        let title = e.target.value;

        if (title != "") {
            const blogByTitlte = props.blogs.filter((blog) => {
                return String(blog.title)
                    .toLowerCase()
                    .includes(String(title).toLowerCase());
            });

            setBlogs(blogByTitlte);
        } else {
            setBlogs(props.blogs);
        }
    }
    useEffect(() => {}, []);

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Nav />
            <div className="w-full lg:w-4/5 lg:mx-auto px-3 mt-3 flex flex-col items-center sm:items-baseline sm:space-x-3 sm:flex-row ">
                <div className="flex  w-full">
                    {/* <div className="mb-3 w-full mr-1">
                        <select
                            name=""
                            className="w-full border-orange-400 rounded-lg focus:border-orange-500 "
                            id=""
                        >
                            <option value="">Urutkan</option>
                            <option value="">Terbaru</option>
                            <option value="">Populer</option>
                        </select>
                    </div> */}
                    <div className="mb-3 w-full">
                        <select
                            onChange={showByCategory}
                            className="w-full border-orange-400 rounded-lg focus:border-orange-500 "
                        >
                            <option value="all">Semua kategori</option>
                            {categories.map((category) => {
                                return (
                                    <option
                                        key={`categoryId.${category.id}`}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>

                <div className="w-full">
                    <input
                        onChange={searchHandler}
                        className="w-full  border-orange-400 rounded-lg focus:border-orange-500 "
                        type="text"
                        placeholder="Cari judul Blog"
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-center  mt-5 ">
                {loading ? (
                    <></>
                ) : (
                    <>
                        {" "}
                        {blogs.map((blog) => {
                            return (
                                <CardBlog
                                    key={`blogId.${blog.id}`}
                                    blog={blog}
                                />
                            );
                        })}
                    </>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
