import React from "react"
import Nav from "../components/nav"
import HeroIntro from "../components/herointro"
import HeroSVG from "../components/herosvg"
export default function Header() {
  return ( 
    <div id="header" className="relative overflow-hidden">
      <div id="banner" className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-10">
          <Nav />
        </div>
      </div>
    </div>
  )
}