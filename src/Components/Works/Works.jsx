import React,{useState} from 'react'
import "./Works.scss"
//import Girl from "../../Images/girl edit.jpg"
import Arrow from "../../Images/arrow.png"
import Rdie from "../../Images/Riding.png"
import Workdet from "./Workdet.js"

const Works = () => {
    const [Curslide,SetCurslide] =  useState(0);
    
    const handleClick = (way) => {
        way ==="left" ?  SetCurslide(Curslide > 0 ?Curslide-1 :2):
            SetCurslide(Curslide<Workdet.length -1 ? Curslide+1:0);
    };
    return (
        <div className="Works" id="Works"> 
            <div className="Slider" style={{transform:`translateX(-${Curslide * 100}vw)`}}>
                { Workdet.map((d)=> (<div className="Container Active">
                    <div className="Item">
                        <div className="Left">
                            <div className="Leftcontainer">
                                <div className="Imagecontainer">
                                    <img src={Rdie} alt={""} />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        
                        <div className="Right">
                             <img src={d.img} alt={d.id} />
                        </div>
                    </div>
                </div>))
                }
            </div>
            <img src={Arrow} className="Arrow Lefta" alt="" onClick={()=>handleClick("left")}/>
            <img src={Arrow} className="Arrow Righta" alt=""  onClick={()=>handleClick()}/>
        </div>
    );
}

export default Works
