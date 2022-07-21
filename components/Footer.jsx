import React from "react"
import githubIcon from "../images/github-icon.png"
import linkedinIcon from "../images/linkedin-icon.png"
import websiteIcon from "../images/website-icon.png"

export default function Footer(){
    return(
        <div className="footer-wrapper">
            <a href = "https://github.com/Tinet0624"><img src={githubIcon} className="icon"/></a>
            <a href = "https://www.linkedin.com/in/alexandrajhaley/"><img src={linkedinIcon} className="icon"/></a>
            <a href = "https://www.alexandrahaleyart.com"><img src={websiteIcon} className="icon"/></a>
        </div>
    )
}