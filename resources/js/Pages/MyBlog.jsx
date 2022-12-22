import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Nav from "@/Components/Nav";
import CardMyBlog from "@/Components/CardMyBlog";
import { Link } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
const MyBlog = (props) => {
    const { blogs } = props;
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Nav />
            <div className="w-full mt-3 sm:w-4/5 sm:mx-auto lg:w-[70%]">
                {blogs.length > 0 ? (
                    <>
                        {blogs.map((blog) => {
                            return (
                                <CardMyBlog
                                    key={`blogId.${blog.id}`}
                                    title={blog.title}
                                    cover={blog.cover_url}
                                    date={blog.created_at}
                                    slug={blog.slug}
                                >
                                    <div className="">
                                        <Link
                                            href={`/edit-blog/${blog.slug}`}
                                            className="text-sm btn btn-ghost btn-circle btn-sm sm:text-sm sm:btn-lg"
                                        >
                                            <FontAwesomeIcon
                                                className=""
                                                icon={faPen}
                                            />
                                        </Link>
                                        <Link
                                            method="delete"
                                            as="button"
                                            href={`/blog-delete/${blog.slug}`}
                                            className="text-sm btn btn-ghost btn-circle btn-sm sm:text-sm sm:btn-lg"
                                        >
                                            <FontAwesomeIcon
                                                className=""
                                                icon={faTrash}
                                            />
                                        </Link>
                                    </div>
                                </CardMyBlog>
                            );
                        })}
                    </>
                ) : (
                    <h1 className="text-lg font-semibold">Tidak ada blog</h1>
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default MyBlog;
