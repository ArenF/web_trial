// import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import './index.css';
import './custom/css/sidenav.css';
import './custom/css/image-box.css';
import './custom/css/invisible.css';
import './custom/css/backgroundColor.css';
import './custom/css/underBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: true}
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    this.setState(state => ({
      open: !state.open
    }));
    console.log("Hello world!");
  }

  render() {
    const isOpen = this.state.open;
    let sideNavigation;

    if (isOpen) {
      sideNavigation = 
      <>
      <div className='sidenav'>
        <button
         className='close-button'
         onClick={this.handleOpen}
        >
          <FontAwesomeIcon icon={faXmark} size='2x'/>
        </button>
        <ul className='items'>
          <li><a href="#">MAIN</a></li>
          <li><a href="#">LOGIN</a></li>
          <li><a href="#">WRITE</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      </>
    } else {
      sideNavigation = 
      <>
      <button
       className='open-button'
       onClick={this.handleOpen}
      >
        <FontAwesomeIcon icon={faBars} size='2x'/>
      </button>
      </>
    }

    return (
      <div className='sideNavBar'>
        {sideNavigation}
      </div> 
    )
  }
}

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
      <form action="post" className='footer_section'>
        <p className='footer_section'>If you wrote to me some any idea or commision. please request me</p>
        <textarea className='input_area' name="RequestMessage" id="request" cols="30" rows="10"></textarea>
        <button className='sending_request'><p>Send!</p></button>
      </form>
    </footer>
  );
}

// function ImageBox() {
//   // let size = [props.state.x, props.state.y];
//   // let image = props.state.image_src;
// }

function App() {

  return (
    <>
      <div className='blue_background'>
        <SideNav />
        <ImageBox 
          public_image_file='/resources/balloon.jpg'
          width='100vw'
          height='100vh' 
          color='orange'
        >
          <div className='font-box' style={{ width:'898px' }}>
            <h1 className='title'>ImageBox</h1>
            <div className='line'></div>
            <p className='description'>params No vela laitus le valem leture</p>
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
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


export default App;