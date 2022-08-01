import React from "react"
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"
import appCSS from "../styles/App.module.css"

export default function App(){
  return(
    <div className={appCSS.container}>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}