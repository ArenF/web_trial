import React, { Component } from "react";

class ImageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
            width: this.props.width,
            height: this.props.height,
        }
    }
    
    render() {
        const styleMessage = {
            background: 'url(' + this.state.image + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
            width: this.state.width,
            height: this.state.height,
        };

        return (
            <div className="image-box" style={styleMessage}>
                {this.props.children}
            </div>
        );
    }
}

class ColorBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
            w: this.props.width,
            h: this.props.height,
            color: this.props.color
        }
    }

    render() {
        return(
            <ImageBox image={this.state.image} width={this.state.w} height={this.state.h}>
                <div className={this.state.color + '-cover'}>
                    {this.props.children}
                </div>
            </ImageBox>
        );
    }
}


export { ImageBox, ColorBox };

// class ImageBackground extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             image: this.props.image
//         }
//     }

//     render() {
//         const styleMessage = {
//             background: 'url(' + this.state.image + ')',
//             backgroundRepeat: 'no-repeat'
//           };

//         return (
//             <div className="login-background" style={styleMessage}>
//                 {this.props.children}
//             </div>
//         );
//     }
// }

// class ImageBox extends React.Component {

//     constructor(props) {
//       super(props);
//       this.state = {
//         w: this.props.width,
//         h: this.props.height,
//         imageSrc: this.props.public_image_file,
//       };
//     }
  
//     render() {
//       const styleMessage = {
//         width: this.state.w,
//         height: this.state.h,
//         background: 'url(' + this.state.imageSrc + ')',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover'
//       };
  
//       return (
//         <div className='image-box' style={styleMessage}>
//           <div className={this.props.color + '-cover'}>
//             {this.props.children}
//           </div>
//         </div>
//       );
//     }
// }