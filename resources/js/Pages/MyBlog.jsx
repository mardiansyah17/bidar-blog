import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Nav from "@/Components/Nav";
import CardMyBlog from "@/Components/CardMyBlog";
const MyBlog = (props) => {
    const { blogs } = props;

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Nav />
            <div className="w-full mt-3 sm:w-4/5 sm:mx-auto lg:w-[70%]">
                {blogs.map((blog) => {
                    return (
                        <CardMyBlog
                            key={`blogId.${blog.id}`}
                            title={blog.title}
                            slug={blog.slug}
                            cover={blog.cover_url}
                        />
                    );
                })}
            </div>
        </AuthenticatedLayout>
    );
};

export default MyBlog;
