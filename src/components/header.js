import React from 'react'
import { Link } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faShoppingCart)

const Header = ({ siteTitle }) => (
  <div className="header py-2">
    <div className="container d-flex align-items-center">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src="/static/logo.png" alt="" style={{ width: 60, height: 'auto' }} />
        </Link>

        <div className="ml-auto text-white">
          <span className="mr-2">Vardenis Pavardenis</span>
          <FontAwesomeIcon icon="user" color="#fff"/>

          <Link className="ml-3">
            <FontAwesomeIcon icon="shopping-cart" color="#fff"/>
          </Link>
        </div>
    </div>
  </div>
)

export default Header
