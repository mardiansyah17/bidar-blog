import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function ErrorModal({ active, title, error, action }) {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        if (error.length != 0) {
            setShowModal(true);
        }
    }, [error]);

    return (
        <>
            <input
                checked={showModal}
                type="checkbox"
                id="my-modal"
                className="modal-toggle"
                onChange={() => ""}
            />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">{title}</h3>
                    {error.length === 1 ? (
                        <h1>{error[0]}</h1>
                    ) : (
                        <ul className="list-disc px-5">
                            {error.map((data, i) => {
                                return <li key={i}>{data}</li>;
                            })}
                        </ul>
                    )}

                    <div className="modal-action">
                        <label
                            onClick={() => {
                                setShowModal(false);
                                action ? action() : "";
                            }}
                            htmlFor="my-modal"
                            className="px-3 py-2 bg-orange-500 text-slate-100 rounded-lg cursor-pointer"
                        >
                            Yay!
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}
