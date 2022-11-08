import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import moment from "../../../node_modules/moment";
const MyBlog = (props) => {
    const { blogs } = props;
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <div className="overflow-x-auto mx-auto mt-4 relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm  text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Judul Blog
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Terakhir dibuat
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Kategori
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Jumlah pembaca
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog) => {
                            return (
                                <tr
                                    key={blog.id}
                                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {blog.title}
                                    </th>
                                    <td className="py-4 px-6">
                                        {moment(blog.updated_at).fromNow()}
                                    </td>
                                    <td className="py-4 px-6">
                                        {blog.category.name}
                                    </td>
                                    <td className="py-4 px-6">100</td>
                                    <td className="py-4 px-6">
                                        <a
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
};

export default MyBlog;
