import {
    faGears,
    faPencil,
    faTrash,
    faUpload,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Cropper } from "react-advanced-cropper";
import Button from "./Button";
import InputSelect from "./InputSelect";
import InputText from "./InputText";
import DropZoneComponent from "./DropZoneComponent";
import { uploadImageAfterCrop } from "@/utils/uploadImageAfterCrop";
import axios from "axios";

const SideBar = ({ categories, content, blog, pathButton }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [blogData, setBlogData] = useState({
        title: "",
        category_id: "",
        description: "",
        content: "",
        cover_url: "",
    });
    useEffect(() => {
        if (blog) {
            setBlogData(blog);
        }
        if (content != blogData.content) {
            setBlogData((data) => ({
                ...data,
                content: content,
            }));
        }
    }, [content]);
    const [image, setImage] = useState();
    const [imgCrop, setImgCrop] = useState();
    const [resImg, setResImg] = useState(null);
    const [loading, setLoading] = useState(false);
    function onDrop(file) {
        setImage(URL.createObjectURL(file[0]));
    }
    return (
        <>
            {showSidebar ? (
                <button
                    className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon color="black" icon={faXmark} />
                </button>
            ) : (
                <button
                    className="bg-orange-500 text-4xl p-3 absolute right-0 z-50 rounded-l-full top-[50%] text-white "
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon icon={faGears} />
                </button>
            )}

            <div
                className={`top-0 right-0 w-full bg-white  fixed h-full z-40  ease-in-out duration-300 ${
                    showSidebar ? "translate-x-0 " : "translate-x-full"
                }`}
            >
                <div className=" h-screen flex sm:w-2/4 sm:mx-auto flex-col justify-center">
                    <InputText
                        value={blogData.title}
                        valueHandler={(e) => {
                            setBlogData((data) => ({
                                ...data,
                                title: e.target.value,
                            }));
                        }}
                        placeholder={"Judul"}
                    />

                    {loading ? (
                        <div className="lds-dual-ring mx-auto "></div>
                    ) : (
                        <>
                            {image ? (
                                <div className="">
                                    <Cropper
                                        aspectRatio={16 / 9}
                                        onChange={(e) => {
                                            setImgCrop(e);
                                        }}
                                        src={image}
                                        style={{
                                            height: 200,
                                        }}
                                        className={"cropper my-3 mx-7"}
                                    />

                                    <div className="mx-auto w-fit">
                                        <button
                                            onClick={() => {
                                                setLoading(true);
                                                uploadImageAfterCrop(
                                                    imgCrop,
                                                    (res) => {
                                                        if (res.success) {
                                                            setLoading(false);
                                                            setImage(null);
                                                            setResImg(
                                                                res.path.path
                                                            );
                                                            setBlogData(
                                                                (data) => ({
                                                                    ...data,
                                                                    cover_url:
                                                                        res.path
                                                                            .path,
                                                                })
                                                            );
                                                        }
                                                    }
                                                );
                                            }}
                                            className="px-3 py-2 mr-3 bg-orange-500 text-white rounded-lg"
                                        >
                                            Upload
                                        </button>
                                        <button
                                            onClick={() => setImage(null)}
                                            className="px-3 py-2 bg-red-500 text-white rounded-lg"
                                        >
                                            cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {resImg ? (
                                        <div className="relative mt-3">
                                            <img
                                                className="w-[60%] my-1 mx-auto"
                                                src={resImg}
                                                alt=""
                                            />
                                            <FontAwesomeIcon
                                                onClick={() =>
                                                    axios
                                                        .post("/delete-image", {
                                                            img: resImg,
                                                        })
                                                        .then((res) =>
                                                            setResImg(null)
                                                        )
                                                }
                                                className="absolute top-5 right-[20%]"
                                                icon={faTrash}
                                            />
                                        </div>
                                    ) : (
                                        <DropZoneComponent onDrop={onDrop} />
                                    )}
                                </>
                            )}
                        </>
                    )}

                    <InputSelect
                        value={blogData.category_id}
                        categories={categories}
                        valueHandler={(e) => {
                            setBlogData((data) => ({
                                ...data,
                                category_id: e.target.value,
                            }));
                        }}
                    />
                    <textarea
                        value={blogData.description}
                        onChange={(e) => {
                            setBlogData((data) => ({
                                ...data,
                                description: e.target.value,
                            }));
                        }}
                        name="content"
                        id=""
                        rows="4"
                        className="border-orange-500 w-[80%] mx-auto rounded-lg mt-3"
                    ></textarea>

                    <Button
                        url={pathButton}
                        method={"post"}
                        data={blogData}
                        title={"Upload"}
                        className="w-20 mt-3 mx-auto"
                    />
                </div>
            </div>
        </>
    );
};

export default SideBar;
