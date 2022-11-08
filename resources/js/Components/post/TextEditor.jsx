import { ContentState, convertFromHTML, EditorState } from "draft-js";
import React, { useEffect, useState } from "react";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { toolbarOption } from "./../../utils/toolbarOption";

export default function TextEditor({ textEditorValueHandler, value }) {
    return (
        <div className="bg-white h-fit   w-[60%] border border-gray-300">
            <Editor
                editorClassName="max-h-80 h-72 lpx-3"
                onEditorStateChange={textEditorValueHandler}
                toolbar={toolbarOption}
                editorState={value}
            />
        </div>
    );
}
