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
import ErrorModal from "@/Components/ErrorModal";
import { useEffect } from "react";

export default function PostBlog(props) {
    const [content, setContent] = useState("");
    const [errors, setError] = useState([]);
    useEffect(() => {
        setError(Object.values(props.errors));
    }, [props.errors]);

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Nav />
            <ErrorModal title={"Gagal posting blog"} error={errors} />
            <SideBar
                pathButton={"/upload-blog"}
                categories={props.categories}
                content={content}
            />
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
                            setContent(e);
                        }}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
