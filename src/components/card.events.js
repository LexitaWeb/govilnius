import React from 'react'
import logo from '../assets/img/logo_black.svg'

export default function cardEvents({img,title,desc,date}) {
  return (
	<a href="#" className="card-events">
	  <div className="card-events-img" style={{backgroundImage:`url(${img})`}}>
	  </div>
	  <div className="card-events-text">
	  	<h4>{title}</h4>
		<p>
			{desc}
		</p>
		<div className="text-right mt-auto">
			<i className="fas fa-calendar-alt mr-2 text-muted"></i>
			{date}
		</div>
		<div className="card-events-bg" style={{backgroundImage:`url(${logo})`}}>
		</div>
	  </div>

	</a>
  )
}
