import React from "react";
import { ImageCard } from "./Component/CardBoard";

import "../CSS/BoardPage/board.css";

function FirstLine(props) {
    return (
        <div className="first-line">
            {props.children}
        </div>
    );
}

function SecondLine(props) {
    return(
        <div className="second-line">
            {props.children}
        </div>
    );
}

export default function App() {
    return(
        // <div className="mainboard">
        //     <CardBoard imageSrc="/resources/citystreet.jpg" title="CityStyle"
        //     contents="we must face our city and society, city is beautiful but, also criminal and
        //     lonely." author='John Smith' join='12'/>
        // </div>
        <div className="flex">
            <FirstLine>
                <ImageCard image="/resources/citystreet.jpg" />
                <ImageCard image="/resources/comfortable.jpg" />
                <ImageCard image="/resources/rest.jpg"/>
            </FirstLine>
            <SecondLine>
                <ImageCard image="/resources/camera.jpg" />
                <ImageCard image="/resources/aurora.jpg" />
            </SecondLine>
        </div>
    );
}