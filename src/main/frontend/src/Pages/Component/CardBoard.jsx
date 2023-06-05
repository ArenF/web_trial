import { Component, useRef, useState } from "react";
import { ImageBox } from "./BoxForm";
import { faArrowRight, faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../CSS/BoardPage/imagecard.css"

//게시글 카드
//참고할 것 https://codepen.io/utilitybend/pen/bGvjLba
class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
        }
    }

    render() {
        return (
            <article className="article">
                <figure>
                    <img className="article-img" src={this.state.image} alt="" />
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
                <a className="read-more" href="#">
                    Read More <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /> 
                </a>
            </article>
        );
    }
}

export { ImageCard }