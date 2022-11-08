import axios from "axios";
import { url } from "@/Pages/PostBlog";
export const uploadCallback = (file, callback) => {
    console.log(file);
    return new Promise((resolve, reject) => {
        let path = null;
        axios
            .post(
                "/upload-image",
                { img: file },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((e) => {
                resolve({ data: { link: `${url}/storage/${e.data.path}` } });
            });
    });
};
