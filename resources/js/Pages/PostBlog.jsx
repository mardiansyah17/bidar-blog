import AttributBlog from "@/Components/post/AttributBlog";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/inertia-react";
import { useState } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import Nav from "@/Components/Nav";
import Button from "@/Components/Button";
import SideBar from "@/Components/SideBar";
import { buttonToolbar } from "@/utils/buttonList";
import { onImageUploadBefore } from "@/utils/onImageUploadBefore";

export default function PostBlog(props) {
    const [blogData, setBlogData] = useState({
        title: "",
        category_id: "",
        deskription: "",
        content: "",
    });

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Nav />
            <SideBar />
            <div className="flex">
                <div className="p-3 h-full  w-full">
                    <SunEditor
                        setOptions={{
                            buttonList: buttonToolbar,
                            showPathLabel: false,
                            height: "70vh",
                        }}
                        onImageUploadBefore={onImageUploadBefore}
                        onChange={(e) => {
                            setBlogData((data) => ({
                                ...data,
                                content: e,
                            }));
                        }}
                    />
                </div>
                <div className="hidden border-l border-gray-200 min-h-[89vh] px-3 pt-3 basis-[30%] sm:flex flex-col">
                    <h1 onClick={() => console.log(blogData)}>halo</h1>
                    <div className=" mb-3 w-full">
                        <input
                            onChange={(e) => {
                                setBlogData((data) => ({
                                    ...data,
                                    title: e.target.value,
                                }));
                            }}
                            className=" w-full  border-orange-400 rounded-lg focus:border-orange-500 "
                            type="text"
                            placeholder="Cari judul Blog"
                        />
                    </div>
                    <textarea
                        className="border-orange-400 rounded-lg focus:border-orange-500 mb-3"
                        placeholder="Deskripsi"
                        onChange={(e) => {
                            setBlogData((data) => ({
                                ...data,
                                deskription: e.target.value,
                            }));
                        }}
                    ></textarea>
                    <Button
                        method={"post"}
                        title={"Publish"}
                        url="/upload-blog"
                        data={blogData}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
