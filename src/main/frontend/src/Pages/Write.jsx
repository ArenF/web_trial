import React from 'react';

import "../CSS/WritePage/writeform.css";


// 참고 https://colorlib.com/etc/cf/ContactFrom_v1/index.html
class WriteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <div className='letter flex-sort sort-center'>
                <div className='dropboxs'></div>
                <div>
                    <p className='write-title'>Write a note</p>
                    <input id='title' type="text" />
                    <input id='category' type="text" />
                    <div className='write-box' placeholder='Write something funny' contentEditable='true'>

                    </div>
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