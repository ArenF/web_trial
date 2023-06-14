import React from 'react';
import { ImageBox, ColorBox } from './Component/BoxForm';

import '../CSS/HomePage/backgroundColor.css';
import '../CSS/HomePage/invisible.css';
import '../CSS/HomePage/image-box.css';
import '../CSS/HomePage/underBar.css';

class InvisibleButton extends React.Component {

    constructor(props) {
      super(props);
      this.name = this.props.name;
    }
  
    render() {
      return(
        <div className='center_box'>
          <button className='invisible_button'>
            {this.name}
          </button>
        </div>
      );
    }
}
  
function UnderBar() { 
    return(
      <footer className='footer_frame dark_blue_background'>
        <div className='footer_nav'>
          <div className='line'></div>
          <p className='nav_info'>
            <span>Author : ALLEN</span><br />
            <span>EMAIL : hjh040@gmail.com</span><br />
            <span>Copyright 2020. cocoder. All Right Reserved</span>
          </p>
        </div>
      </footer>
    );
}

function toLogin() {
  window.location.href = "/login";
}

export default function App() {
    return(
        <div className='blue_background'>
          <ColorBox 
            image='/resources/balloon.jpg'
            width='100vw'
            height='100vh' 
            color='orange'
          >
            <div className='font-box' style={{ width:'898px' }}>
              <h1 className='title'>Write For All</h1>
              <div className='line'></div>
              <div className='flex-sort'>
                <p className='description'>
                  노트를 작성하고 모두에게 공유하세요. 당신의 메모는 누군가에게 영감을 주거나
                  마음을 흔들 수 있습니다. 당신의 작은 말이 전해지도록 메모를 남겨주세요.
                </p>
                <button onClick={toLogin} className='start-button'>START</button>
              </div>

            </div>
          </ColorBox>
          <div className='flex-sort sort-start'>
            <ColorBox image='/resources/citystreet.jpg' width='640px' height='427px' color='blue'>
              <InvisibleButton name='City Street' />
            </ColorBox>
            <ColorBox image='/resources/comfortable.jpg' width='640px' height='427px' color='orange'>
              <InvisibleButton name='Comfortable' />
            </ColorBox>
          </div>
          <div className='flex-sort sort-end'>
            <ColorBox image='/resources/aurora.jpg' width='640px' height='427px' color='blue'>
              <InvisibleButton name='Aurora' />
            </ColorBox>
            <ColorBox image='/resources/rest.jpg' width='640px' height='427px' color='orange'>
              <InvisibleButton name='Rest' />
            </ColorBox>
          </div>
          <UnderBar/>
        </div>
    );
}