import { faGears, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "./Button";
import InputSelect from "./InputSelect";
import InputText from "./InputText";

const SideBar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

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
                    className="bg-orange-500 text-4xl p-3 absolute right-0 z-50 rounded-l-full top-[50%] text-white sm:hidden"
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
                <div className=" h-screen flex flex-col justify-center">
                    <InputText placeholder={"Judul"} />
                    <InputSelect />
                    <Button title={"Posting"} className="w-20 mt-3 mx-auto" />
                </div>
            </div>
        </>
    );
};

export default SideBar;
