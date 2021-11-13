import React from 'react'
import "./Testimony.scss"
import Leftarr from "../../Images/left-arrow.png"
import Yt from "../../Images/youtube.png";
import Tlist from './Tlist';

const Testimony = () => {
    return (
        <div className="Testimony" id="Testimony">
            <h1>Testimony</h1>
            <div className="Container">
                {Tlist.map((t) => (
                <div className={t.featured ? "Card Featured" : "Card"}>
                    <div className="Top">
                        <img className="leftuh" src={Leftarr} alt="Leftarrow" />
                        <img className="Middleuh" src= {t.img}alt="" />
                        <img className="Rightuh" src={Yt}alt="" />
                        
                    </div>
                    <div className="Center">{t.desc}</div>
                    <div className="Bottom">
                        <h3>{t.name}</h3>
                        <h4>{t.title}</h4>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default Testimony
