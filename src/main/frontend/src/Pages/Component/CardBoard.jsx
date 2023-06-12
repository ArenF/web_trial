import { Component, useEffect, useRef, useState } from "react";
import { faArrowRight, faCamera, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../CSS/BoardPage/imagecard.css";
import "../../CSS/WritePage/writecard.css";
import "../../CSS/WritePage/imagebox.css";

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
                    <div className="line"></div>
                    <p>
                    Curabitur convallis ac quam vitae laoreet. 
                    Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. 
                    Etiam mattis lobortis porta. 
                    Vestibulum ultrices iaculis enim imperdiet egestas.
                    </p>
                </div>
                <a className="read-more" href="/">
                    Read More <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /> 
                </a>
            </article>
        );
    }
}

function ImageUploadBox() {
    const [uploadedImage, setUploadedImage] = useState([]);
    const [isImaged, setIsImaged] = useState(false);
    const [previewImage, setPreviewImage] = useState(<ImagePreview isImaged={isImaged} />);
    const uploadBoxRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        const uploadBox = uploadBoxRef.current;
        const input = inputRef.current;

        // 파일 관리 함수
        const handleFiles = (files) => {
            const file = files[0];
            if (!file.type.startsWith("image/")) return;
            const reader = new FileReader();
            
            // load end 이벤트에 실행할 작업 설정
            reader.onloadend = (e) => {
                const result = e.target.result;
                if (result) {
                    setUploadedImage(result);
                }
            };
            //실행하며 load하여 설정한 작업 같이 실행.
            reader.readAsDataURL(file);
        };

        
        //각 이벤트 핸들러가 파일 관리 함수 실행.
        const changeHandler = (event) => {
            const files = event.target.files;
            handleFiles(files);
        };

        const dropHandler = (event) => {
            event.preventDefault();
            event.stopPropagation();
            const files = event.dataTransfer.files;
            handleFiles(files);
        };

        const dragOverHandler = (event) => {
            event.preventDefault();
            event.stopPropagation();
        }

        const clickHandler = (event) => {
            input.click();
        }

        uploadBox.addEventListener("click", clickHandler);
        uploadBox.addEventListener("drop", dropHandler);
        uploadBox.addEventListener("dragover", dragOverHandler);
        input.addEventListener("change", changeHandler);

        return () => {
            uploadBox.removeEventListener("click", clickHandler);
            uploadBox.removeEventListener("drop", dropHandler);
            uploadBox.removeEventListener("dragover", dragOverHandler);
            input.removeEventListener("change", changeHandler);
        }
    });

    // 이곳에 uploadedImage 값을 받아, ImagePreview 컴포넌트를 생성 후
    // previewImage 변수에 저장.
    useEffect(() => {
        console.log(uploadedImage);
        setIsImaged(true)
        setPreviewImage(<ImagePreview image={uploadedImage} isImaged={isImaged} />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uploadedImage]);

    return (
        <div className="imageuploadbox">
            <div ref={uploadBoxRef}>{previewImage}</div>
            <input type="file" accept="image/*" ref={inputRef} />
        </div>
    );
}

function ImagePreview({ image, isImaged }) {
    
    const noneElement = (
        <div className="none-imagepreview">
            <FontAwesomeIcon className="dnd-text icon" icon={faCamera}/>
            <p className="dnd-text">Drag Image to Here</p>
        </div>
    );

    const previewElement = (
        <div className="imagepreview">
            <img src={image} alt="" />
        </div>
    );

    if (isImaged) {
        return previewElement;
    } else {
        return noneElement;
    }
}

function InputBox() {
    return (
        <section>
            <input 
            className="title-input" 
            placeholder="This is my title" 
            type="text" 
            />
            <input 
            className="category-input"
            placeholder="@category" 
            type="text" 
            />
            <div
            className="contents" 
            contentEditable={true}
            placeholder="Write something interesting"
            >        
            </div>

            <button className="send-button">
                <span class="text">Send</span>
                <span class="icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="paper-plane" width="20px" aria-hidden="true"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" fill="currentColor"></path></svg></span>
            </button>
        </section>
    )
}

function WriteCard() {
    return (
        <div className="flex-card colored-background">
            <div className="left-box">
                <ImageUploadBox />
            </div>
            <div className="right-box">
                <InputBox />
            </div>
        </div>
    );
}
export { ImageCard, WriteCard }