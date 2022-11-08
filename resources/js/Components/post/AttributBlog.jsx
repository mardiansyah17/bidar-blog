import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import ModalPreviewBlog from "./ModalPreviewBlog";

const AttributBlog = ({
    title,
    category_id,
    errors,
    titleHandler,
    coverHandler,
    categoryHandler,
    cover,
    categories,
}) => {
    const [open, setOpen] = useState(false);

    const toggleModal = () => {
        open ? setOpen(false) : setOpen(true);
    };

    return (
        <div className="mb-3 flex  items-center ">
            <div className="">
                <input
                    value={title}
                    onChange={titleHandler}
                    placeholder="Judul"
                    type="text"
                    className="ring-2 mt-3 focus:ring-2  outline-none border-none ring-blue-400 focus:ring-blue-500   rounded-lg"
                />

                {errors.title && (
                    <div className="text-red-400 m-1">{errors.title}</div>
                )}
            </div>
            <div className="border-2 border-blue-500 rounded-lg mt-3 ml-3">
                <Button
                    style={{
                        color: "black",
                        backgroundColor: "white",
                    }}
                    onClick={() => setOpen(true)}
                >
                    Pilih cover
                </Button>
                <ModalPreviewBlog
                    coverHandler={coverHandler}
                    open={open}
                    toggleModal={toggleModal}
                    cover={cover}
                />
            </div>
            <div className="ml-3 mt-3">
                <select
                    defaultValue={category_id}
                    onChange={categoryHandler}
                    name=""
                    id=""
                    className="ring-2 focus:ring-2  outline-none border-none ring-blue-400 focus:ring-blue-500 rounded-lg"
                >
                    <option value="" disabled>
                        Kategori
                    </option>
                    {categories.map((category) => {
                        return (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        );
                    })}
                </select>
                {errors.category_id && (
                    <div className="text-red-400 m-1">{errors.category_id}</div>
                )}
            </div>
        </div>
    );
};

export default AttributBlog;
