import React from 'react';

import '../CSS/backgroundColor.css';
import '../CSS/invisible.css';
import '../CSS/image-box.css';
import '../CSS/underBar.css';

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
        backgroundRepeat: 'no-repeat'
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
              <h1 className='title'>ImageBox</h1>
              <div className='line'></div>
              <div className='flex'>
                <p className='description'>params No vela laitus le valem leture</p>

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