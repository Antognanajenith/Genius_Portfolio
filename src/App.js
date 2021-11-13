import React,{useState} from 'react';
import './App.scss';

import Topbar from "./Components/Topbar/Topbar.jsx";
import Contact from "./Components/Contact/Contact"
import Testimony from "./Components/Testimony/Testimony"
import Intro from "./Components/Intro/Intro"
import Portfolio from "./Components/Portfolio/Portfolio"
import Works from "./Components/Works/Works";
import Menu from "./Components/Menu/Menu";

function App() {

  const [menuOpen,setmenuOpen] = useState(true);
  return (
    <div className="App">
     <Topbar menuOpen={menuOpen} 
     setmenuOpen = {setmenuOpen} />
     <Menu menuOpen={menuOpen} 
     setmenuOpen = {setmenuOpen}/>
     <div className="Section">
     <Intro/> 
     <Portfolio/>
     <Works/>
     <Testimony/>
     <Contact/>
     </div>
    </div>
  );
}

export default App;
