import React from 'react'
import './index'

const Head = () => {
    return(
        <>
            <div className="box1"  style={{height: 50, display: "flex", alignItems: "center"}}>
                <div className="head">  Imp Updates</div>
                <div className="head"> <a href="#about"> About Us </a></div>
                <div className="head"> <a href="#service"> our Services </a> </div>
                <div className="head"> <a href="#contact"> Contact Us </a></div>
            </div>
        </>
    )
}

export default Head;