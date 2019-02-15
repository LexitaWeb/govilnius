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
					<li>
						<Link to="#" className="nav-link">
							See & Doo
							<span className="ml-2 dropdown-toggle"></span>
						</Link>
						<ul className="dropdown-menu">
							{['Latest tips', 'Sightseeing', 'Events', 'Active Leisure', 'Daytrip', 'Shopping', 'City tours'].map((el,i)=>{
								return(
								<li key={i}>
									<Link to="#">
										{el}
									</Link>
								</li>
								)
							})}
						</ul>
					</li>
					<li>
						<Link to="#" className="nav-link">
							Eat & Drink
							<span className="ml-2 dropdown-toggle"></span>
						</Link>
						<ul className="dropdown-menu">
							{['Food Culture', 'Restaurants', 'Cafes', 'Bars & Nightlife'].map((el,i)=>{
								return(
								<li key={i}>
									<Link to="#">
										{el}
									</Link>
								</li>
								)
							})}
						</ul>
					</li>
					<li>
						<Link to="#" className="nav-link">
							Plan your trip
							<span className="ml-2 dropdown-toggle"></span>
						</Link>
						<ul className="dropdown-menu">
							{['About Vilnius', 'Arrival', 'City Transport', 'Accomodation', 'Maps & Publications'].map((el,i)=>{
								return(
								<li key={i}>
									<Link to="#">
										{el}
									</Link>
								</li>
								)
							})}
						</ul>
					</li>
					<li>
						<Link to="#" className="nav-link">
							Vilnius pass
							<span className="ml-2 dropdown-toggle"></span>
						</Link>
						<ul className="dropdown-menu">
							{['Why to buy', 'Attractions', 'Prices & Sales Points'].map((el,i)=>{
								return(
								<li key={i}>
									<Link to="#">
										{el}
									</Link>
								</li>
								)
							})}
						</ul>
					</li>
				</ul>
			</div>
	  </nav>
	</div>
  )
}
export default Nav

// import React from 'react'
// import { Link } from "gatsby";
// import logo from '../assets/img/logo_vln.png'
// export default function Nav() {
//   return (
// 	<div>
// 		<ul className="nav nav-tourism">
			

// 		</ul>
// 	</div>
//   )
// }
