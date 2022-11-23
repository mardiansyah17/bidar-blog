import { faGears, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Button from "./Button";
import InputSelect from "./InputSelect";
import InputText from "./InputText";

const SideBar = ({ categories, content, blog, pathButton }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [blogData, setBlogData] = useState({
        title: "",
        category_id: "",
        description: "",
        content: "",
    });
    useEffect(() => {
        if (blog) {
            setBlogData(blog);
        } else {
            setBlogData((data) => ({
                ...data,
                content: content,
            }));
        }
    }, [content]);

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
                        title={"Edit"}
                        className="w-20 mt-3 mx-auto"
                    />
                </div>
            </div>
        </>
    );
};

export default SideBar;
