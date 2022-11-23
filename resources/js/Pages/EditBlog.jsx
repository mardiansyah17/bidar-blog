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
import { useEffect } from "react";
import ErrorModal from "@/Components/ErrorModal";

export default function EditBlog(props) {
    const [content, setContent] = useState(props.blog.content);
    const [errors, setError] = useState([]);
    useEffect(() => {
        setError(Object.values(props.errors));
    }, [props.errors]);

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Nav />
            <ErrorModal title={"Gagal posting blog"} error={errors} />
            <SideBar
                blog={props.blog}
                categories={props.categories}
                content={content}
                pathButton={`/edit-blog/${props.blog.slug}`}
            />
            <div className="flex">
                <div className="p-3 h-full  w-full">
                    <SunEditor
                        setOptions={{
                            buttonList: buttonToolbar,
                            showPathLabel: false,
                            height: "70vh",
                            value: content,
                        }}
                        onImageUploadBefore={onImageUploadBefore}
                        onChange={(e) => {
                            setContent(e);
                        }}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
