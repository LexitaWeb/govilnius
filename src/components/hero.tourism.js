import React from 'react'
import HeroBg from '../assets/img/vilnius-1570471_1920.jpg'
export default function Hero({children}) {
  return (
	<div className="hero" style={{backgroundImage:`url(${HeroBg})`, height:'80vh'}}>
	  {children}
	</div>
  )
}
