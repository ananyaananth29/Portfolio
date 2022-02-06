import React from 'react';//rfc: react funtcion component
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import "./Home.css";

export default function Home() {
  return <div className='home-container'>
      <Profile/>
      <Footer/>
  </div>;
}
