import React from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Nav from "@/Components/Nav";
import CardMyBlog from "@/Components/CardMyBlog";
import { Link } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
export default function AdminBlogs(props) {
    const { blogs } = props;
    console.log(blogs);
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Nav />
            <div className="w-full mt-3 sm:w-4/5 sm:mx-auto lg:w-[70%]">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Nama penulis</th>
                                <th>tanggal</th>
                                <th>Kategori blog</th>
                                <th>Judul blog</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => {
                                return (
                                    <tr>
                                        <th>{blog.user.name}</th>
                                        <th>
                                            {new Date(
                                                blog.created_at
                                            ).toLocaleDateString("id-ID")}
                                        </th>
                                        <th>{blog.category.name}</th>
                                        <th>{blog.title}</th>
                                        <th>
                                            <Link
                                                as="button"
                                                method="post"
                                                href={`/admin/approve/${blog.slug}`}
                                                className="text-sm btn btn-ghost btn-circle btn-sm sm:text-sm sm:btn-lg"
                                            >
                                                <FontAwesomeIcon
                                                    className=""
                                                    icon={faCheck}
                                                />
                                            </Link>
                                        </th>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
