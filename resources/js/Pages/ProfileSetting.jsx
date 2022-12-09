import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import avatar from "/public/assets/img/avatar.jpg";
import Nav from "@/Components/Nav";
import { useState } from "react";
import InputText from "@/Components/InputText";
import axios from "axios";
import { Link } from "@inertiajs/inertia-react";
const ProfileSetting = (props) => {
    const { auth } = props;
    const [edit, setEdit] = useState(false);
    const [user, setUser] = useState({
        email: auth.user.email,
        name: auth.user.name,
        username: auth.user.username,
    });

    function saveHandler() {
        axios.post("/update-profile", { user }).then((res) => {
            setUser(res.data.user);
            setEdit(false);
        });
    }
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Nav />
            <header className="flex flex-col items-center mt-3">
                <img
                    src={avatar}
                    alt=""
                    className="border border-gray-500 rounded-full w-32"
                />
                <div className="">
                    {!edit ? (
                        <button
                            onClick={() => setEdit(true)}
                            className="mt-3 px-3 py-2 bg-orange-500 text-white rounded-lg"
                        >
                            Edi profile
                        </button>
                    ) : (
                        <button
                            onClick={saveHandler}
                            className="mt-3 px-3 py-2 bg-orange-500 text-white rounded-lg"
                        >
                            Simpan
                        </button>
                    )}
                    <Link
                        hr1f="/forgot-password"
                        className="mt-3 ml-2 px-3 py-2 bg-orange-500 text-white rounded-lg"
                    >
                        Ganti password
                    </Link>
                </div>
            </header>
            <div className="mt-5 flex justify-around w-full sm:w-3/4 sm:mx-auto lg:w-2/4 font-medium">
                {!edit ? (
                    <>
                        <ul className="space-y-3">
                            <li>Alamat email</li>
                            <li>Nama lengkap</li>
                            <li>Username</li>
                        </ul>
                        <ul className="space-y-3">
                            <li>{user.email}</li>
                            <li>{user.name}</li>
                            <li>{user.username}</li>
                        </ul>
                    </>
                ) : (
                    <ul className="flex flex-col items-center w-full space-y-3">
                        {/* <InputText
                            value={user.email}
                            valueHandler={(e) =>
                                setUser((data) => ({
                                    ...data,
                                    email: e.target.value,
                                }))
                            }
                        /> */}

                        <InputText
                            value={user.name}
                            valueHandler={(e) =>
                                setUser((data) => ({
                                    ...data,
                                    name: e.target.value,
                                }))
                            }
                        />
                        <InputText
                            value={user.username}
                            valueHandler={(e) =>
                                setUser((data) => ({
                                    ...data,
                                    username: e.target.value,
                                }))
                            }
                        />
                    </ul>
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default ProfileSetting;
