import React from 'react'
import "./Portfoliolist.scss"

const Portfoliolist = ({title,Active,SetSelected,Id}) => {
    return (
        <li className={Active ? "Portfoliolist Active" : "Portfoliolist" } 
        onClick={() => SetSelected(Id)}>
            {title}
        </li>
    )
}

export default Portfoliolist
