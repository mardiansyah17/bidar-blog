import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import axios from "axios";
import "../../../css/style.css";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    bgcolor: "background.paper",
    p: 2,
};
const ModalPreviewBlog = ({ toggleModal, open, coverHandler, cover }) => {
    const [onEditImg, setOnEditImg] = useState(false);
    const [crop, setCrop] = useState();
    const [img, setImg] = useState();
    const [loading, setLoading] = useState(false);
    const toggleEditImg = () => {
        // onEditImg ? setOnEditImg(false) : setOnEditImg(true);
    };
    const handleCrop = (cropper) => {
        setCrop(cropper.getCanvas());
    };

    const setCover = () => {
        setLoading(true);
        let dataURI = crop.toDataURL();
        var byteString = atob(dataURI.split(",")[1]);

        var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        let fileBlob = new Blob([ab], { type: mimeString });
        let fileImg = new File([fileBlob], "jon.jpg");
        axios
            .post(
                "/upload-image",
                { img: fileImg },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((e) => {
                console.log(e.data);
                setLoading(false);
                setOnEditImg(false);
                coverHandler(e.data.path);
            })
            .catch((err) => console(err));
    };

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className={"outline-none rounded-lg"}>
                <div className="border border-gray-200">
                    {!onEditImg ? (
                        <div className="rounded-xl w-full relative">
                            <img
                                src={cover}
                                alt=""
                                className="mx-auto w-full rounded-lg "
                            />
                            <label
                                htmlFor="selectImg"
                                className="absolute top-0 right-0 py-2 px-3 cursor-pointer"
                            >
                                <FontAwesomeIcon
                                    onClick={toggleEditImg}
                                    className=" text-white bg-black   p-5 bg-opacity-40 rounded-full"
                                    icon={faPen}
                                />
                            </label>
                            <input
                                id="selectImg"
                                className="hidden"
                                type={"file"}
                                onChange={(e) => {
                                    setImg(
                                        URL.createObjectURL(e.target.files[0])
                                    );
                                    setOnEditImg(true);
                                }}
                            />
                        </div>
                    ) : (
                        <div className="rounded-xl w-full relative">
                            <div className="absolute top-1/3 left-1/3  z-50">
                                {loading ? (
                                    <div className="absolute top-1/3 left-1/2 z-50 lds-facebook">
                                        <div className=""></div>
                                        <div className=""></div>
                                        <div className=""></div>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <Cropper
                                aspectRatio={16 / 9}
                                style={{
                                    height: 300,
                                    width: "100%",
                                }}
                                src={img}
                                onChange={handleCrop}
                                className={"cropper"}
                            />

                            <div className="absolute top-0 right-0 py-2 px-3 cursor-pointer">
                                <FontAwesomeIcon
                                    onClick={setCover}
                                    className=" text-white bg-black   p-5 bg-opacity-40 rounded-full"
                                    icon={faCheck}
                                />
                            </div>
                        </div>
                    )}
                    {!onEditImg ? (
                        <div className="space-x-3 flex justify-end my-4 mr-2">
                            <button
                                onClick={toggleModal}
                                className="px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 active:bg-orange-500"
                            >
                                Oke
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </Box>
        </Modal>
    );
};

export default ModalPreviewBlog;
