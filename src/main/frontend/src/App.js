// import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './custom/css/sidenav.css';
import './custom/css/image-box.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// 즉 이것도 객체지향 프로그램의 일부분이며 javascript의 원리를 따라간다.
// 그런고로 만약 세세한 부분을 나누고 그걸 만들며 전체를 다루는 App 클래스에 넣는다는 식으로 구성을 한다면
// 그것이 React의 활용방식이다.

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
        <FontAwesomeIcon icon={faXmark} size='2x'/>
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
      imageSrc: this.props.public_image_file
    };
  }

  render() {
    var styleMessage = {
      width: this.state.w,
      height: this.state.h,
      background: 'url(' + this.state.imageSrc + ')',
      position: 'relative'
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

// function ImageBox() {
//   // let size = [props.state.x, props.state.y];
//   // let image = props.state.image_src;
// }

function App() {
  return (
    <div>
      <>
      <SideNav />
      <ImageBox public_image_file='/resources/balloon.jpg' width='1920px' height='898px' color='orange'>
        <div className='font-box' style={{ width:'898px' }}>
          <h1 className='title'>ImageBox</h1>
          <div className='line'></div>
          <p className='description'>This is none params. add some description.</p>
        </div>
      </ImageBox>
      <ImageBox public_image_file='/resources/citystreet.jpg' width='640px' height='427px' color='blue'>
        <div className='font-box'>
          <h2 className='center-title'>City Street</h2>
        </div>
      </ImageBox>
      <ImageBox public_image_file='/resources/citystreet.jpg' width='640px' height='427px' color='orange'>
        <div className='font-box'>
          <h2 className='center-title'>City Style</h2>
        </div>
      </ImageBox>
      </>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


export default App;