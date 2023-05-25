// import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import './CSS/navbar.css';
import './CSS/image-box.css';
import './CSS/invisible.css';
import './CSS/backgroundColor.css';
import './CSS/underBar.css';

import LoginForm from './custom/jsx/Login';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className='navigation_bar'>
        <ul className='right_line'>
          <li><button onClick={() => {
            return
          }}>HOME</button></li>
          <li><button>LOGIN</button></li>
          <li><button>WRITE</button></li>
          <li><button>FAQ</button></li>
        </ul>
      </div>
    );
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
      <BrowserRouter>
        <div className='blue_background'>
          <NavigationBar/>
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

        <Routes>
          <Route path="/login" element={<LoginForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


export default App;