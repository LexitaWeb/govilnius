import React from 'react'
import { Link } from "gatsby";
// import Logo from '../assets/img/govilnius-logo.png';



const links = [
	{text:'Visit Vilnius', href:'javascript:;'},
	{text:'Do Bussines & Invest', href:'javascript:;'},
	{text:'Relocate & Live', href:'javascript:;'},
	{text:'Meet in Vilnius', href:'javascript:;'},
	{text:'About us', href:'javascript:;', sub:[
		'Who we are',
		'Contacts',
		'Career',
		'News',
	]},
];


const Nav = () => {
  return (
	<div>
	  <nav className="nav">
			<div className="container">
				<ul className="nav-list nav-list-top">
					<li className="d-lg-none">
						<Link className="nav-link">
								<i className="fas fa-bars"></i>
						</Link>
					</li>
					<li className="ml-auto">
						<Link className="nav-link">
								<i className="fas fa-search"></i>
						</Link>
					</li>
					<li>
						<Link className="nav-link">
								<i className="fas fa-wheelchair"></i>
						</Link>
					</li>
					<li>
						<Link className="nav-link">
								EN <span className="dropdown-toggle"></span>
						</Link>
					</li>
				</ul>
				<ul className="nav-list d-none d-lg-flex flex-column flex-lg-row">
					{/* <li className="nav-logo">
						<img src={Logo} alt="Go Vilnius"/>
					</li> */}
					{links.map((el,i)=>{
						return(
						<li key={i}>
							<Link className="nav-link" to="#">
								{el.text}
							</Link>
						</li>
						)
					})}
				</ul>
			</div>
	  </nav>
	</div>
  )
}
export default Nav