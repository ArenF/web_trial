import React from 'react';

import "../CSS/WritePage/writeform.css";


// 참고 https://codepen.io/steinvc/full/nOPLgv
class WriteCard extends React.Component {
    constructor(props) {
        super(props);
        this.colors = ['white', 'black', 'orange', 'green', 'purple']
        this.state = {
            color: this.colors[0]
        }
    }

    render() {
        return(
            <div className='letter'>
                <div className='flex-box'>
                    <div className='image-box'></div>
                    <div className='inline-box'>
                        <div className='title'>
                            Title : <input classNme='title-input' type="text" />
                        </div>
                        <input placeholder='@category' name='categories' className='category' type="text" />
                    </div>
                </div>
                <div className='write-box' placeholder='Write something funny' contentEditable='true'>
                    
                </div>
            </div>
        );
    }
}

export default function App() {
    return (
        <div className='absolute'>
            <WriteCard></WriteCard>
        </div>
    );
}