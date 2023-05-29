import React from 'react';

import '../CSS/HomePage/backgroundColor.css';
import '../CSS/HomePage/invisible.css';
import '../CSS/HomePage/image-box.css';
import '../CSS/HomePage/underBar.css';

class ImageBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        w: this.props.width,
        h: this.props.height,
        imageSrc: this.props.public_image_file,
      };
    }
  
    render() {
      const styleMessage = {
        width: this.state.w,
        height: this.state.h,
        background: 'url(' + this.state.imageSrc + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      };
  
      return (
        <div className='image-box' style={styleMessage}>
          <div className={this.props.color + '-cover'}>
            {this.props.children}
          </div>
        </div>
      );
    }
}

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

export default function App() {
    return(
        <div className='blue_background'>
          <ImageBox 
            public_image_file='/resources/balloon.jpg'
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
                  마음을 흔들어보세요. 당신의 작은 말이 전해지도록 메모를 남겨주세요.
                </p>
                <button className='start-button'>START</button>
              </div>

            </div>
          </ImageBox>
          <div className='flex-sort sort-start'>
            <ImageBox public_image_file='/resources/citystreet.jpg' width='640px' height='427px' color='blue'>
              <InvisibleButton name='City Street' />
            </ImageBox>
            <ImageBox public_image_file='/resources/comfortable.jpg' width='640px' height='427px' color='orange'>
              <InvisibleButton name='Comfortable' />
            </ImageBox>
          </div>
          <div className='flex-sort sort-end'>
            <ImageBox public_image_file='/resources/aurora.jpg' width='640px' height='427px' color='blue'>
              <InvisibleButton name='Aurora' />
            </ImageBox>
            <ImageBox public_image_file='/resources/rest.jpg' width='640px' height='427px' color='orange'>
              <InvisibleButton name='Rest' />
            </ImageBox>
          </div>
          <UnderBar/>
        </div>
    );
}