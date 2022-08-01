import React from "react"
import aboutCSS from "../styles/About.module.css"

export default function About(){
    return(
        <div className={aboutCSS.wrapper}>
            <h1>About Me</h1>
            <p>
                I am a front end developer with a special interest in graphics. 
                I excel at clean and readable code and am always looking for a pixel perfect 
                and dynamic design!
            </p>
        </div>
    )
}