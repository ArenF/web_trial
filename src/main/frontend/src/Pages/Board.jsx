import React from "react";

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
            authorImage : this.props.authorSrc,
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
                <div className="block">
                    <div className="author-profile"></div>
                    <div className="like">{this.state.joinCount}</div>
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
            lonely." />
        </div>
    );
}