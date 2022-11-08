import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";

import mark from "../../../public/assets/img/images/mark.jpg";
import { Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import axios from "axios";

export default function Tes(props) {
    const [img, setImg] = useState(
        "storage/images/tsbCoitjVzr3fURCWnHgzqWaQRKe0KDmR6IWXAUH.png"
    );
    const [upload, setUpload] = useState();

    const [crop, setCrop] = useState();
    const handleCrop = (cropper) => {
        if (cropper.getCanvas() !== null) {
            let dataURI = cropper.getCanvas();
            setUpload(dataURI);
            //    // convert base64 to raw binary data held in a string
            // // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
            // var byteString = atob(dataURI.split(",")[1]);

            // // separate out the mime component
            // var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

            // // write the bytes of the string to an ArrayBuffer
            // var ab = new ArrayBuffer(byteString.length);
            // var ia = new Uint8Array(ab);
            // for (var i = 0; i < byteString.length; i++) {
            //     ia[i] = byteString.charCodeAt(i);
            // }
            // let fileBlob = new Blob([ab], { type: mimeString });
            // let fileImg = new File([fileBlob], "jon.jpg");
            // setUpload(fileImg);
        }
    };
    return (
        <div className="h-screen">
            <input
                type="file"
                onChange={(e) => {
                    // console.log(e.target.files[0]);
                    setImg(URL.createObjectURL(e.target.files[0]));
                }}
            />
            {/* <img src={img} alt="" /> */}
            <Cropper
                style={{
                    height: 500,
                    width: 500,
                }}
                src={img}
                onChange={handleCrop}
                className={"cropper"}
            />
            ;
            <button
                onClick={() => {
                    axios
                        .post(
                            "/upload-image",
                            { img: upload },
                            {
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                },
                            }
                        )
                        .then((e) => console.log(e.data));
                    // .catch((err) => console(err));
                }}
            >
                kirim
            </button>
        </div>
    );
}
