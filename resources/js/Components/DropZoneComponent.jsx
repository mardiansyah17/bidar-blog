import React, { useState } from "react";
import Dropzone from "react-dropzone";

export default function DropZoneComponent({ onDrop }) {
    const [img, setImg] = useState();
    return (
        <>
            <Dropzone onDrop={onDrop}>
                {({ getRootProps, getInputProps }) => (
                    <section className="border border-dashed border-gray-400 mx-9  mt-3">
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p className="p-3 box-border">
                                Pilih gambar untuk cover
                            </p>
                        </div>
                    </section>
                )}
            </Dropzone>
        </>
    );
}
