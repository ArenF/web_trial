import React from "react";

import "../CSS/BoardPage/board.css";

class BoardList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <table className="border">
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>제목</td>
                            <td>글쓴이</td>
                            <td>작성일</td>
                            <td>조회수</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Test Title</td>
                            <td>Author: AREN</td>
                            <td>Date: 2023-23-23</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Test Title</td>
                            <td>Author: AREN</td>
                            <td>Date: 2023-12-12</td>
                            <td>8</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function MainBoard(props) {
    return(
        <div className="main-card">
            {props.children}
        </div>
    );
}

export default function App() {
    return(
        <MainBoard>
            <BoardList />
        </MainBoard>
    );
}