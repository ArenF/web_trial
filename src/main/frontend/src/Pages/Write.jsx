import React from 'react';

import "../CSS/WritePage/writeform.css";


// 참고 https://codepen.io/steinvc/full/nOPLgv
class WriteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <div className='letter'>
                <div className='flex-sort'>
                    <div className='flex-sort sort-start'>
                        {/* 전체적인 컴포넌트 수정 후 뷰와 나누기 */}
                        <div className='image-box sort-start'></div>
                    </div>
                    <div className='flex-sort sort-end'>
                        <div className='title-box'>
                            <div className='write-title'>
                                Title : <input classNme='title-input' type="text" />
                            </div>
                            <input placeholder='@category' name='categories' className='category' type="text" />
                        </div>
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