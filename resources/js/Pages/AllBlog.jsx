import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Nav from "@/Components/Nav";
import CardBlog from "@/Components/CardBlog";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function AllBlog(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Nav />
            <div className="w-full px-3 mt-3">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Urutkan berdasarkan
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={Urutkan berdasarkan}
                        label="Urutkan berdasarkan"
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="flex flex-wrap justify-center space-x-3 mt-5 ">
                <CardBlog />
                <CardBlog />
                <CardBlog />
                <CardBlog />
                <CardBlog />
                <CardBlog />
            </div>
        </AuthenticatedLayout>
    );
}
