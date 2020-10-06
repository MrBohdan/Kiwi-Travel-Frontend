import React from 'react';
import SunEditor from "suneditor-react";
import '../scss/suneditor.min.scss';

function DisplaySunEditor({ handleDescriptionText, description }) {
    return (<SunEditor
        value={description}
        onChange={(event) => handleDescriptionText(event)}
        setDefaultStyle="font-size: 14px;"
        setContents={description}
        setOptions={{
            height: 300,
            width: "100%",
            mode: "classic",
            katex: "window.katex",
            font: [
                'Arial', 'Comic Sans MS', 'Courier New', 'Impact',
                'Georgia', 'tahoma', 'Trebuchet MS', 'Verdana'
            ],
            fontSize: [
                8,
                10,
                14,
                18,
                24,
                36
            ],
            audioUrlInput: false,
            tabDisable: false,
            shortcutsHint: false,
            "buttonList": [
                ["undo", "redo"],
                ["font", "fontSize", "formatBlock", "paragraphStyle", "blockquote", "textStyle", "lineHeight"],
                ["bold", "underline", "italic", "strike", "subscript", "superscript"],
                "/",
                ["removeFormat"],
                ["fontColor", "hiliteColor"],
                ["outdent", "indent"],
                ["align", "horizontalRule", "list", "table"],
                ["link", "image", "video"],
                ["showBlocks", "codeView"],
                ["preview", "print"]
            ]
        }}
    />);
}

export default DisplaySunEditor;