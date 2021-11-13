import React,{useState} from 'react'
import "./Contact.scss"
import Cntact from "../../Images/Contact.jpg";

const Contact = () => {
    const[Sent,SetSent] = useState(false);

    return (
        <div className="Contact" id="Contact">
            <div className="Left">
                <img src={Cntact} alt="" />
            </div>
            <div className="Right">
                
                <form>
                <h2>Contact</h2>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" onClick={()=>SetSent(!Sent)}>{Sent ? "Submitted,Thanks!":"SEND" }</button>
                    
                </form>
            </div>
            
        </div>
    )
}

export default Contact

