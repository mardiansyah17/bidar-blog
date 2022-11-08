import AttributBlog from "@/Components/post/AttributBlog";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/inertia-react";
import { useState } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

export default function PostBlog(props) {
    const [title, setTitle] = useState("");
    const [category_id, setCategory] = useState("");
    const [open, setOpen] = useState(true);
    const { errors } = usePage().props;
    const [content, setContent] = useState("");
    const [cover, setCover] = useState("");
    const titleHandler = (e) => {
        setTitle(e.target.value);
    };
    const categoryHandler = (e) => {
        setCategory(e.target.value);
    };
    const coverHandler = (url) => {
        setCover(url);
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <div className="flex flex-col w-full items-center justify-center">
                <AttributBlog
                    title={title}
                    category_id={category_id}
                    open={open}
                    errors={errors}
                    titleHandler={titleHandler}
                    categoryHandler={categoryHandler}
                    coverHandler={coverHandler}
                    cover={cover}
                    categories={props.categories}
                />
                <div className="bg-white h-[400px]   w-[70%] border border-gray-300">
                    <SunEditor
                        width="100%"
                        height="250px"
                        setOptions={{
                            buttonList: buttonList.complex,
                            showPathLabel: false,
                        }}
                        setDefaultStyle={"font-size: 14px;"}
                        onChange={(e) => setContent(e)}
                    />
                    {errors.content && (
                        <div className="text-red-400 m-1">{errors.content}</div>
                    )}
                </div>

                <div className="">
                    <Link
                        // onClick={() => console.log(data)}
                        href="/post-blog"
                        method={"post"}
                        data={{
                            title,
                            category_id,
                            content,
                            cover,
                        }}
                        className="bg-green-600 mt-3 rounded-lg hover:bg-green-700 active:bg-green-600 text-white px-2 py-1 "
                        as="button"
                    >
                        Posting
                    </Link>

                    <button
                        onClick={() => {
                            console.log({
                                title,
                                category_id,
                                content,
                                cover,
                            });
                        }}
                        className="ml-3 bg-red-500 mt-3 rounded-lg hover:bg-red-600 active:bg-red-500 text-white px-2 py-1 "
                    >
                        Reset
                    </button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
