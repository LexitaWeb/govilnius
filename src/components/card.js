import React from 'react'

export default function card({name,desc,img}) {
  return (
	<div className="card">
	  <div className="card-img" style={{backgroundImage:`url(${img})`}}>
	  	<div className="card-desc">
		  {desc}
		</div>
	  </div>
	  <div className="card-name">
	  	{name}
	  </div>
	</div>
  )
}
