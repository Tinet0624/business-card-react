import React from "react"
import githubIcon from "../images/github-icon.png"
import linkedinIcon from "../images/linkedin-icon.png"
import websiteIcon from "../images/website-icon.png"
import footerCSS from "../styles/Footer.module.css"

export default function Footer(){
    return(
        <div className={footerCSS.wrapper}>
            <a href = "https://github.com/Tinet0624" target='_blank'><img src={githubIcon} className={footerCSS.icon}/></a>
            <a href = "https://www.linkedin.com/in/alexandrajhaley/" target='_blank'><img src={linkedinIcon} className={footerCSS.icon}/></a>
            <a href = "https://www.alexandrahaleyart.com" target='_blank'><img src={websiteIcon} className={footerCSS.icon}/></a>
        </div>
    )
}