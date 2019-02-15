import React from 'react'

export default function card({name,desc,img}) {
  return (
	<a href="#" className="card-tips">
	  <div className="card-tips_img" style={{backgroundImage:`url(${img})`}}>
	  	<div className="card-tips_desc">
		  {desc}
		</div>
	  </div>
	  <div className="card-tips_name">
	  	<span class="card-tips_text">{name}</span>
	  </div>
	</a>
  )
}
