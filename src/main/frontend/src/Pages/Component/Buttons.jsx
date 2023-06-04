import React, { useRef } from "react";


class DragAndDropButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDragging:false
        }
    }

    render() {
        return(
            <div className="DragDrop">
                <input 
                type="text" 
                id="fileUpload"
                style={{ display: "none"}}
                multiple={true}
                />

                <label
                className={this.isDragging ? "DragDrop-File-Dragging" : "DragDrop-File"}
                htmlFor="fileUpload"
                ref={''}
                >
                    
                </label>
            </div>
        );
    }
}