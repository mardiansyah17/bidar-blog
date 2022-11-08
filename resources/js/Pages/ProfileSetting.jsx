import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
const ProfileSetting = (props) => {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <div className="flex flex-col items-center w-full">
                <header className="">
                    <div className="w-24 h-24 relative">
                        <img
                            src="http://127.0.0.1:8000/storage/images/1ufcTjfXHgxJQe9Z0ChqE03PAJpGeYVVAdkhhtvN.png"
                            alt=""
                            className="w-full h-full  rounded-full "
                        />
                        <FontAwesomeIcon
                            icon={faPen}
                            className="absolute bottom-0 right-0 text-white bg-black bg-opacity-30 rounded-full p-3"
                        />
                    </div>
                </header>
                <div className="mt-5">
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="Nama Lengkap"
                            className=""
                        />
                        <FontAwesomeIcon icon={faPen} className="ml-3" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ProfileSetting;
