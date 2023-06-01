import React from 'react';

import "../CSS/WritePage/writeform.css";

class WriteCard extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div className='letter-box'>
                <form action="#" id='paper' method='get'>
                    <div className='image-box'></div>
                    <div className='title-box'>
                        Title : <input id='title' type="text" placeholder='Title' name='title' />
                    </div>
                    <textarea className='content' name='content' id='content-box'
                    placeholder='Enter something funny'></textarea>
                    <br />
                    <div className='flex-box'>
                        <input type="text" placeholder='category' className='cateogries' />
                        <button className='upload'></button>
                    </div>
                </form>
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