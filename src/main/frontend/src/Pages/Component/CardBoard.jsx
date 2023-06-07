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
                <a className="read-more" href="#">
                    Read More <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /> 
                </a>
            </article>
        );
    }
}

function ImageUploadBox({ max = 10 }) {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const uploadBoxRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        const uploadBox = uploadBoxRef.current;
        const input = inputRef.current;
    
        //이미지 파일인지 확인한 후, 파일에서 추출해
        //uploadedImages라는 배열에 추가하는 방식
        const handleFiles = (files) => {
            for (const file of files) {
                if (!file.type.startsWith("image/")) continue;
                const reader = new FileReader();
                //load end 후 실행할 값(함수) 를 저장.
                reader.onloadend = (e) => {
                    const result = e.target.result;
                    if (result) {
                        //[...state, result] 는 state라는 
                        // 값 방식에서 result를 다음 배열로 추가하는 방식
                        setUploadedImages((state) => [...state, result].slice(0, max));
                    }
                };
                //readAsDataURL로 파일을 read 시작.
                reader.readAsDataURL(file);
            }
        };

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
        };

        uploadBox.addEventListener("drop", dropHandler);
        uploadBox.addEventListener("dragover", dragOverHandler);
        input.addEventListener("change", changeHandler);

        return () => {
            uploadBox.removeEventListener("drop", dropHandler);
            uploadBox.removeEventListener("dragover", dragOverHandler);
            input.removeEventListener("change", changeHandler);
        };
    }, [max]);

    //uploadedImages의 값이 변동되엇을 때.
    useEffect(() => {
        const ImageJSXs = uploadedImages.map((image, index) => {
            const isDeleteImage = (element) => {
                return element === image;
            };
            const deleteFunc = () => {
                uploadedImages.splice(uploadedImages.findIndex(isDeleteImage), 1);
                setUploadedImages([...uploadedImages]);
            };
            return <ImagePreview image={image} deleteFunc={deleteFunc} key={index} />
        });
        console.log(ImageJSXs);
        setPreviewImages(ImageJSXs);
    }, [uploadedImages]);

    return (
        <div className="imageuploadbox">
          {/* <label className="drag_or_click" ref={uploadBoxRef}>
            <div className="text_box">
              <h3>드래그 또는 클릭하여 업로드</h3>
              <span>권장사항: oooMB 이하 고화질</span>
            </div>
            <div className="icon_box">
              <i className="fas fa-arrow-circle-up"></i>
            </div>
          </label> */}
          <div className="dnd-card" ref={uploadBoxRef}>
            <div 
            className="display"
            style={{}}
            >
                <FontAwesomeIcon className="dnd-text icon" icon={faCamera} />
                <p className="dnd-text">Drag Image to here!</p>
            </div>
          </div>
          <input type="file" accept="image/*" id="sdfsd" ref={inputRef} />
          <div className="preview_wrapper">
            <div className="preview_container">{previewImages}</div>
          </div>
        </div>
    );
}

function ImagePreview({ image, deleteFunc}) {
    return (
        <div className="imagepreview" draggable={true}>
            <img src={image} alt="" />
            <div className="icon-container" onClick={deleteFunc}>
                <FontAwesomeIcon icon={faTimes}/>
            </div>
        </div>
    );
}

function InputUploadBox() {
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
                <InputUploadBox />
            </div>
        </div>
    );
}
export { ImageCard, WriteCard }