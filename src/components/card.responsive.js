import React from 'react'
import logo from '../assets/img/logo_black.svg'
export default function cardResponsive({title,img,desc,date, className}) {
  return (
	<a href="#" className={`card-responsive ${className}`}>
		<div className="card-responsive_img" style={{backgroundImage:`url(${img})`}}>
		</div>
		<div className="card-responsive-text d-flex flex-column">
			<div className="card-responsive-text_title">
				<h5>
					{title}
				</h5>
			</div>
			<div className="card-responsive-text_desc">
				{desc}
			</div>
			<div className="d-flex mt-auto flex-wrap">
				<div className="card-responsive-text_date">
					<i className="fas fa-calendar-alt text-muted mr-2"></i>
					{date}
				</div>
				<div className="ml-auto text-right">
					<a className="card-responsive-btn" href="#">Read more</a>
				</div>
			</div>
			<div className="card-responsive-bg" style={{backgroundImage:`url(${logo})`}}></div>
		</div>
	</a>
  )
}
