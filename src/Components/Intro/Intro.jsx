import React,{useEffect,useRef} from 'react'
import "./Intro.scss"
import Heros from "../../Images/heros.jpg";
import {init} from "ityped";

const Intro = () => {

    const TextRef = useRef();
    useEffect(() => {
        init(TextRef.current,
             { showCursor: false,
                backDelay:  1500,
                strings: ['Science!', 'Magnets!','Crystals!' ] })
    }, [])
    return (
        <div className="Intro" id="Intro">
            <div className="Left">
                <div className="Imgcontainer">
                    <img src= {Heros} alt="Intropic" />
                </div>
            </div>
            <div className="Right">
                <div className="Textwrapperintro">
                    <h2>Hi there!</h2>
                    <h3>Welcome</h3>
                    <h4>Yeah BITCH..<span ref={TextRef}></span></h4>
                </div>
            </div>
        </div>
    )
}

export default Intro
