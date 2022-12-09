import CardContribution from "@/Components/CardContribution";
import Nav from "@/Components/Nav";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import mardi from "/public/assets/img/mardi.jpg";
import kanero from "/public/assets/img/kanero.jpeg";
import yosan from "/public/assets/img/yosan.jpeg";
import dina from "/public/assets/img/dina.jpeg";
import andre from "/public/assets/img/andre.jpeg";
export default function About(props) {
    return (
        <AuthenticatedLayout
            AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Nav />
            <div className="mt-7 p-3">
                <div className="mb-5">
                    <h1 className="font-bold text-xl mb-3">
                        Apa itu BidarBlog
                    </h1>
                    <p>
                        BidarBlog adalah sebuah platform bloging system platform
                        ini dibuat bertujuan untuk seseorang mendapatkan dari
                        blog baik itu Berita, Tutorial, Tips&Trick, dan lainnya
                        bukannya hanya membaca pengguna juga dapat membuat
                        Blognya sendiri dan bisa mendapatkan uang tergantung
                        dari seberapa banyak yang membaca blognya
                    </p>
                </div>
                <div className="">
                    <h1 className="font-bold text-xl mb-3">
                        Yang berkontribusi
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center text-center">
                        <CardContribution
                            img={mardi}
                            name={"Muhammad Mardiansyah"}
                            nim="211420025"
                        />
                        <CardContribution
                            img={kanero}
                            name={"KANERO JUNIAR"}
                            nim="211420027"
                        />
                        <CardContribution
                            img={yosan}
                            name={"Yosandra Saputri"}
                            nim="211420033"
                        />
                        <CardContribution
                            img={dina}
                            name={"Dina pratami putri"}
                            nim="211420056"
                        />
                        <CardContribution
                            img={andre}
                            name={"Andre Satriawan"}
                            nim="211420011"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
