import React from 'react'
import { Link } from "gatsby";
import logo from '../assets/img/logo_vln.png'
export default function Nav() {
  return (
	<div>
		<ul className="nav nav-tourism">
			<li>
				<Link to="#">
					See & Doo
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
				<Link to="#">
					Eat & Drink
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
			<li className="p-2">
				<img src={logo} alt="Vilnius"/>
			</li>
			<li>
				<Link to="#">
					Plan your trip
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
				<Link to="#">
					Vilnius pass
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
  )
}
