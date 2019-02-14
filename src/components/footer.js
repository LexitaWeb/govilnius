import React from 'react'
import { Link } from "gatsby";
export default () => {
  return (
	<div className="container">
		<div className="footer">
			<ul>
				<li>
					<Link to="#">
						About
					</Link>
				</li>
				<li>
					<Link to="#">
						News
					</Link>
				</li>
				<li>
					<Link to="#">
						Travel Trade
					</Link>
				</li>
				<li>
					<Link to="#">
						For media
					</Link>
				</li>
				<li>
					<Link to="#">
						Contacts
					</Link>
				</li>
				<li>
					<Link to="#">
						Career
					</Link>
				</li>
				<li>
					<Link to="#">
						Follow us
					</Link>
				</li>
				<li>
					<Link to="#">
						Privacy policy
					</Link>
				</li>
				<li>
					<Link to="#">
						Good to know
					</Link>
				</li>
			</ul>
		</div>
	  <div className="copyright">
	  	@Go Vilnius 2019 | Sprendimas: Lexita
	  </div>
	</div>
  )
}
