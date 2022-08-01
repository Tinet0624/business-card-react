import React from "react"
import interestsCSS from "../styles/Interests.module.css"

export default function Interests(){
    return(
        <div className={interestsCSS.wrapper}>
            <h1>Interests</h1>
            <p>
                Anything to do with bright colors, Fantasy, Rich artistic expression, 
                music of all kinds, gaming, and always family time.
            </p>
        </div>
        
    )
}