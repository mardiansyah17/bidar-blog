import axios from "axios";

export function onImageUploadBefore(files, info, uploadHandler) {
    axios
        .post(
            "/upload-image",
            { img: files[0] },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        )
        .then((e) => {
            const response = {
                // The response must have a "result" array.
                result: [
                    {
                        url: e.data.path,
                        name: files[0].name,
                        size: files[0].size,
                    },
                ],
            };
            uploadHandler(response);
        });
}
