import React from 'react'
import Link from 'gatsby-link'
import './Header.css' 
import logo from '../Images/logo-designcode.svg'
const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to=" "><img src={logo} width="30"/></Link>
      <Link to="">Courses</Link>
      <Link to="">Downloads</Link>
      <Link to="">Workshops</Link>
      <Link to=""><button>Buy</button></Link>
    </div>
  </div>
)

export default Header
