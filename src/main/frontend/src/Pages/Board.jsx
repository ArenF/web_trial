import React, { useEffect, useState } from "react";
import { DtoImageCard } from "./Component/CardBoard";
import { SearchBar } from "./Component/Bars";

import "../CSS/BoardPage/board.css";
import "../CSS/BoardPage/searchBar.css";
import { database } from "../firebase";
import { ref, onValue, } from "firebase/database";

function FirstLine(props) {
    
    return (
        <div className="line-setter">
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

    // const readOne = () => {
    //     const dbRef = ref(database);
    //     get(child(dbRef, '/board')).then(snapshot => {
    //         if (snapshot.exists()) {
    //             console.log(snapshot.val());
    //         } else {
    //             console.log("no Data Available");
    //         }
    //     }).catch(error => {
    //         console.error(error);
    //     });
    // }

    const [userInput, setUserInput] = useState('');
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        const dbRef = ref(database, '/board');
        return onValue(dbRef, (snapshot) => {
            const data = snapshot.val();

            if (snapshot.exists()) {

                Object.values(data).map((card) => {
                    setCardList((cards) => {
                        if (cards.includes(card)) {
                            return [...cards];
                        } else {
                            return [...cards, card];
                        }
                    });
                });
            } else {
                console.log("NO DATA CONFERENCE");
            }
        });
    }, []);


    return(
        // <div className="mainboard">
        //     <CardBoard imageSrc="/resources/citystreet.jpg" title="CityStyle"
        //     contents="we must face our city and society, city is beautiful but, also criminal and
        //     lonely." author='John Smith' join='12'/>
        // </div>
        <div>
            <SearchBar setInput={setUserInput} />
            <div className="flex">
                <FirstLine>
                    {cardList.map((component) => {

                        console.log(component);
                        return (
                            <DtoImageCard title={component.title}
                            contents={component.contents}
                            image={component.image} />
                        );
                    })}
                </FirstLine>
                {/* <FirstLine>
                    <ImageCard image="/resources/citystreet.jpg" />
                    <ImageCard image="/resources/comfortable.jpg" />
                    <ImageCard image="/resources/rest.jpg"/>
                </FirstLine>
                <SecondLine>
                    <ImageCard image="/resources/camera.jpg" />
                    <ImageCard image="/resources/aurora.jpg" />
                </SecondLine>
                <FirstLine>
                    <ImageCard image="/resources/citystreet.jpg" />
                    <ImageCard image="/resources/comfortable.jpg" />
                    <ImageCard image="/resources/rest.jpg"/>
                </FirstLine>
                <SecondLine>
                    <ImageCard image="/resources/camera.jpg" />
                    <ImageCard image="/resources/aurora.jpg" />
                </SecondLine>
                <FirstLine>
                    <ImageCard image="/resources/balloon.jpg" />
                    <ImageCard image="/resources/aurora.jpg" />
                    <ImageCard image="/resources/camera.jpg"/>
                </FirstLine> */}
            </div>
        </div>
    );
}