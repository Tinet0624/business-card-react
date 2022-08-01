import React from "react"
import photo from "../images/Photo.jpg"
import emailIcon from "../images/email-icon.png"
import linkedinIcon from "../images/linkedin-icon.png"
import infoCSS from "../styles/Info.module.css"

export default function Info(){
    return(
        <div className={infoCSS.wrapper}>
            <img src={photo} className={infoCSS.photo}/>
            <h1 className={infoCSS.myName}>Alexandra Haley</h1>
            <p className={infoCSS.title}>React Front End Developer</p>
            <div className={infoCSS.btnWrapper}>
                <a href = "mailto: alexandrahaley619@gmail.com" target='_blank'><button type="button" className={infoCSS.button}><img src={emailIcon} className={infoCSS.icon}/>Email</button></a>
                <a href = "https://www.linkedin.com/in/alexandrajhaley/" target='_blank'><button type="button" className={`${infoCSS.button} ${infoCSS.btnLinkedin}`}><img src={linkedinIcon} className={infoCSS.icon}/>LinkedIn</button></a>
            </div>
        </div>
        
    )
}