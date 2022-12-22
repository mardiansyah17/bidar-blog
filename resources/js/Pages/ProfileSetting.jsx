import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import avatar from "/public/assets/img/avatar.jpg";
import Nav from "@/Components/Nav";
import { useState } from "react";
import InputText from "@/Components/InputText";
import axios from "axios";
import { Link } from "@inertiajs/inertia-react";
import ErrorModal from "@/Components/ErrorModal";
const ProfileSetting = (props) => {
    const { auth } = props;
    const [method, setMethod] = useState("");
    const [user, setUser] = useState({
        email: auth.user.email,
        name: auth.user.name,
        username: auth.user.username,
    });

    const [error, setError] = useState([]);
    const [password, setPassword] = useState({
        old: "",
        new: "",
        confirm: "",
    });
    function saveHandler() {
        axios.post("/update-profile", { user }).then((res) => {
            setUser(res.data.user);
            setMethod("");
        });
    }

    function updatePassowordHandler() {
        axios
            .post("/update-passowrd", password)
            .then((res) => setMethod(""))
            .catch((err) => setError((e) => [...e, err.response.data.message]));
    }

    function reseError() {
        setError([]);
    }
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Nav />
            <ErrorModal
                title={"Ganti password gagal"}
                error={error}
                action={reseError}
            />
            <header className="flex flex-col items-center mt-3">
                {/* <h1 onClick={() => console.log(error.length)}>klik</h1> */}
                <img
                    src={avatar}
                    alt=""
                    className="border border-gray-500 rounded-full w-32"
                />
                <div className="">
                    {method === "" ? (
                        <>
                            <button
                                onClick={() => setMethod("edit")}
                                className="mt-3 px-3 py-2 bg-orange-500 mr-3  text-white rounded-lg"
                            >
                                Edit profile
                            </button>
                            <button
                                onClick={() => setMethod("updatePassword")}
                                className="mt-3 px-3 py-2 bg-orange-500 text-white rounded-lg"
                            >
                                Ganti password
                            </button>
                        </>
                    ) : (
                        <>
                            {method === "edit" ? (
                                <>
                                    <button
                                        onClick={() => setMethod("")}
                                        className="mt-3 px-3 py-2 bg-red-500 mr-3 text-white rounded-lg"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        onClick={saveHandler}
                                        className="mt-3 px-3 py-2 bg-orange-500 text-white rounded-lg"
                                    >
                                        Simpan
                                    </button>
                                </>
                            ) : (
                                ""
                            )}
                            {method === "updatePassword" ? (
                                <>
                                    <button
                                        onClick={() => setMethod("")}
                                        className="mt-3 px-3 py-2 bg-red-500 mr-3 text-white rounded-lg"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        onClick={updatePassowordHandler}
                                        className="mt-3 px-3 py-2 bg-orange-500 text-white rounded-lg"
                                    >
                                        Simpan
                                    </button>
                                </>
                            ) : (
                                ""
                            )}
                        </>
                    )}
                </div>
            </header>
            <div className="mt-5 flex justify-around w-full sm:w-3/4 sm:mx-auto lg:w-2/4 font-medium">
                {method === "" ? (
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
                    <>
                        {method === "edit" ? (
                            <ul className="flex flex-col items-center w-full space-y-3">
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
                        ) : (
                            ""
                        )}

                        {method === "updatePassword" ? (
                            <>
                                <div className="flex flex-col items-center w-full space-y-3">
                                    <InputText
                                        type={"password"}
                                        placeholder={"Password lama"}
                                        valueHandler={(e) =>
                                            setPassword((data) => ({
                                                ...data,
                                                old: e.target.value,
                                            }))
                                        }
                                    />
                                    <InputText
                                        type={"password"}
                                        placeholder={"Password baru"}
                                        valueHandler={(e) =>
                                            setPassword((data) => ({
                                                ...data,
                                                new: e.target.value,
                                            }))
                                        }
                                    />
                                    <InputText
                                        type={"password"}
                                        placeholder={"Konfirmasi password"}
                                        valueHandler={(e) =>
                                            setPassword((data) => ({
                                                ...data,
                                                confirm: e.target.value,
                                            }))
                                        }
                                    />
                                </div>
                            </>
                        ) : (
                            ""
                        )}
                    </>
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default ProfileSetting;
