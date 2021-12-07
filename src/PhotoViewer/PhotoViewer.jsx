import React from "react";  // import React (to provide access to JSX)
import "./PhotoViewer.css";

export const PhotoViewer = ({bw, index, toggle}) => {
    const toggleBw = () => {
        toggle(index);
    }

    return (
        <img className={"photo" + (bw ? " black-and-white" : "")} src={"https://picsum.photos/id/" + index + "/128/128"} onClick={toggleBw} />
    );
}