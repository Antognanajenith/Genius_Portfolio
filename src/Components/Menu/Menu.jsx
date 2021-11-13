import React from 'react';
import "./Menu.scss";

const Menu = ({menuOpen,setmenuOpen}) => {
    return (
        <div className={menuOpen ? "Menu ":"Menu Active" }>
            <ul onClick={()=>setmenuOpen(!menuOpen)}>
               <li >
                   <a href="#Intro">Home</a>
               </li>
               <li >
                   <a href="#Portfolio">Portfolio</a>
               </li>
               <li>
                   <a href="#Works">Works</a>
               </li>
               <li>
                   <a href="#Testimony">Testimony</a>
               </li>
               <li>
                   <a href="#Contact">Contact</a>
               </li>
            </ul>
        </div>
    )
}

export default Menu;
