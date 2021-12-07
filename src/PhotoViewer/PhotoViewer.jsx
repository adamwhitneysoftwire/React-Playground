import React from "react";  // import React (to provide access to JSX)
import "./PhotoViewer.css";

// noinspection SpellCheckingInspection
export class PhotoViewer extends React.Component {    // declare and export new function called 'PhotoViewer'
    constructor(props) {
        super(props);
        this.state = {
            bandw: props.bandw ? true : false
        }

        this.toggle = this.toggle.bind(this);
    }

    render() {
        return (
            <div className="photo">
                <img className={this.state.bandw ? "black-and-white" : ""} src="https://picsum.photos/1920/1080" onClick={this.toggle}/>
                <h1>React Photo Viewer</h1>
            </div>
        );
    }

    toggle() {
        this.setState(prevState => ({
            bandw: !prevState.bandw
        }));
    }
}
