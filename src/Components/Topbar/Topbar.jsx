import React from 'react';
import "./Topbar.scss"
//import mainicon from "../../Images/icon.png";

const Topbar = ({menuOpen,setmenuOpen}) => {
    return (
        <div className={menuOpen ? "Topbar":"Topbar Active" }>
          <div className="Topbarwrap">
            <div className="left">
            <a href="#Intro" className="Icon" > 
              Genius.
            </a></div>
              <div className="Right">
                <a href="#Portfolio"  className="Menudisp Active" >Portfolio</a>
                <a href="#Works"  className="Menudisp" >Works</a>
                <a href="#Testimony"  className="Menudisp" >Testimony</a>
                <a href="#Contact"  className="Menudisp" >Contact</a>  
                <button className="Hamburger" onClick={()=>setmenuOpen(!menuOpen)}>≣</button>
                
              </div>
            </div>
        </div>
    )
}

export default Topbar
