import React, { Component } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../CSS/BoardPage/imagecard.css"

class ImageCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className="article">
                <figure>
                    <img src="" alt="" />
                </figure>
                <div className="article-body">
                    <h2>This is Title</h2>
                    <p>
                    Curabitur convallis ac quam vitae laoreet. 
                    Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. 
                    Etiam mattis lobortis porta. 
                    Vestibulum ultrices iaculis enim imperdiet egestas.
                    </p>
                </div>
                <a className="read-more" href="#">Read More <FontAwesomeIcon icon={faArrowRight} /> </a>
            </article>
        );
    }
}

export { ImageCard }