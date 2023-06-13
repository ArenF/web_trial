import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import '../CSS/Common/navbar.css';
import '../CSS/Common/profile.css';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Board from '../Pages/Board';
import Write from '../Pages/Write';
import SignUp from '../Pages/SignUp';

class NavigationBar extends React.Component {
    render() {
      return (
        <div className='navigation_bar'>
          <ul className='right_line'>
            <li><NavLink className={({isActive}) => "nav-link" + (isActive ? "click" : "")} to='/'>HOME</NavLink></li>
            <li><NavLink className={({isActive}) => "nav-link" + (isActive ? "click" : "")} to='/login'>LOGIN</NavLink></li>
            <li><NavLink className={({isActive}) => "nav-link" + (isActive ? "click" : "")} to='/board'>BOARD</NavLink></li>
            <li><NavLink className={({isActive}) => "nav-link" + (isActive ? "click" : "")} to='/write'>WRITE</NavLink></li>
            <li><NavLink className={({isActive}) => "nav-link" + (isActive ? "click" : "")} to='/faq'>FAQ</NavLink></li>
          </ul>

          <div className='login-profile'>

          </div>
        </div>
      );
    }
  }

export default function NavBar() {
    return (
        <BrowserRouter>
            <NavigationBar />

            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/board' element={<Board/>}/>
                <Route path='/write' element={<Write/>}/>
                <Route path='/signup' element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    );
}