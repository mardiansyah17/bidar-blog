import React from "react";

export default function NewsCreate() {
    return (
        <div>
            <form action="/news" method="post">
                <label htmlFor="">Title</label>
                <input type="text" placeholder="Judul" />
                <button>Kirim</button>
            </form>
        </div>
    );
}
