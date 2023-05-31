import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../CSS/BoardPage/board.css";

//게시글 카드
class CardBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.imageSrc,
            title: this.props.title,
            contents: this.props.contents,
            joinCount: this.props.join,
            author: this.props.author,
        }
    }

    getStyleMessage() {
        return {
            background: 'url(' + this.state.image + ')',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'beige'
        }
    }

    render() {
        return (
            <div className="cardBoard">
                <div className="board-image" style={this.getStyleMessage()}></div>
                <p className="board-title">{this.state.title}</p>
                <p className="board-content">{this.state.contents}</p>
                <div className="board-line"></div>
                <div className="profile-field">
                    <div className="author-profile"></div>
                    <p className="author-name">{this.state.author}</p>
                    <FontAwesomeIcon className="user-icon" icon={faUser} size="0.5x" />
                    <p className="joinner">{this.state.joinCount}</p>
                </div>
            </div>
        );
    }
}

export default function App() {
    return(
        <div className="mainboard">
            <CardBoard imageSrc="/resources/citystreet.jpg" title="CityStyle"
            contents="we must face our city and society, city is beautiful but, also criminal and
            lonely." author='John Smith' join='12'/>
        </div>
    );
}