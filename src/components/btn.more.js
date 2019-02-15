import React from 'react'

export default function more({text,href,className,icon}) {
  return (
	<a href={href || '#'} className={`btn-more ${className}`}>
	  {icon?<i class={icon}></i>:false}
	  {text}
	</a>
  )
}
