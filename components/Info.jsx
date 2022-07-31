import React from "react"
import photo from "../images/Photo.jpg"
import emailIcon from "../images/email-icon.png"
import linkedinIcon from "../images/linkedin-icon.png"

export default function Info(){
    return(
        <div className="info-wrapper">
            <img src={photo} className="photo"/>
            <h1 className="my-name">Alexandra Haley</h1>
            <p className="title">React Front End Developer</p>
            <div className="btn-wrapper">
                <a href = "mailto: alexandrahaley619@gmail.com" target='_blank'><button type="button" className="button"><img src={emailIcon} className="icon"/>Email</button></a>
                <a href = "https://www.linkedin.com/in/alexandrajhaley/" target='_blank'><button type="button" className="button btn-linkedin"><img src={linkedinIcon} className="icon"/>LinkedIn</button></a>
            </div>
        </div>
        
    )
}