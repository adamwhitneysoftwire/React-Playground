import {PhotoViewer} from "./PhotoViewer/PhotoViewer";
import React, {useState} from "react";

function App() {
    const PHOTO_NUM = 98;

    const initialBw = Array(PHOTO_NUM);
    initialBw.fill(false);

    const [bw, setBw] = useState(initialBw);

    const toggle = (index) => {
        const newBw = [...bw];
        for (let i = 0; i < bw.length; i++) {
            if (i !== index) {
                newBw[i] = false;
            }
        }
        newBw[index] = !bw[index];
        setBw(newBw);
    }

    const photos = [];
    for (let i = 0; i < PHOTO_NUM; i++) {
        photos.push(<PhotoViewer bw={bw[i]} index={i} toggle={toggle} />);
    }

    return (
        <div>
            <h1>React Photo Viewer</h1>
            <div className="photo-container">
                {photos}
            </div>
        </div>
    );
}

export default App;
