import React from 'react';
import Navbar from './Navbar/Navbar';
import BannerHome from './Banner/Banner';
import BannerPropos from './BannerPropos/BannerPropos';
import { useLocation } from 'react-router-dom';
import "./header.css";

function Header() {
  const location = useLocation()
  if(location.pathname === "/kaza/") {
    return (
      <>
        <header>
          <Navbar/>
          <BannerHome/>
        </header> 
      </>
    )
  }else if(location.pathname === "/a-propos"){
    return (
      <>
       <header>
          <Navbar/>
          <BannerPropos/>
        </header>  
      </>
    )
  }else{
    return (
      <>
       <header>
          <Navbar/>
        </header>  
      </>
    )
  } 
}
export default Header