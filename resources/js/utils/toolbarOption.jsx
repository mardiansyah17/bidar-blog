export const toolbarOption = {
    blockType: {
        inDropdown: true,
        options: ["Normal", "H1", "H2", "H3", "H4", "Blockquote", "Code"],
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
    },
    image: {
        uploadCallback: (file, callbacl) => {
            console.log(file);
        },
    },
};
