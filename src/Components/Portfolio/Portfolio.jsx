import React,{useState,useEffect} from 'react'
import "./Portfolio.scss"
import Portfoliolist from "./Portfoliolist.jsx";
import Liist from "./List.js"
import { featuredPortfolio,
    webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio} from "./Listdata.js"

const Portfolio = () => { 
    const [Selected,SetSelected] =useState("web")
    const [Listdata,SetListdata] = useState([""])

    useEffect(() => {
        switch (Selected){
            case "web":SetListdata(webPortfolio);
            break;
            case "Featured":SetListdata(featuredPortfolio);
            break;
            case "Mobile app":SetListdata(mobilePortfolio);
            break;
            case "Design":SetListdata(designPortfolio);
            break;
            case "Branding":SetListdata(contentPortfolio);
            break;
            default:SetListdata(webPortfolio);
        }
    }, [Selected])
    return (
        <div className="Portfolio" id="Portfolio">
            <h1>Portfolio</h1>
            <ul>
                {Liist.map((item)=>(
                    <Portfoliolist title={item.Title}
                    Active = {Selected === item.Id}
                    SetSelected = {SetSelected} 
                    Id = {item.Id}/>
                ))}
            </ul>
            <div className="Container">
                    {Listdata.map((d)=>(
                <div className="Item">
                    <img src={d.img} alt=""/>
                    <h3>{d.title}</h3>
                </div> 
                ))}
            </div>
        </div>
    )
}

export default Portfolio
