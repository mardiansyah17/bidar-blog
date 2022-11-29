import axios from "axios";
import { dataURItoBlob } from "./dataURItoBlob";

export const uploadImageAfterCrop = (file, callback) => {
    if (file != undefined) {
        let img = new File(
            [dataURItoBlob(file.getCanvas().toDataURL())],
            "name"
        );
        let response;
        axios
            .post(
                "/upload-image",
                {
                    img: img,
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((res) => {
                callback({ success: true, path: res.data });
            })
            .catch((err) => "wkwk");
        // console.log(response);
    }
};
