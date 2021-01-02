import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
  return(
    <header style={headerStyle}>
      <h1>My Todo List</h1>
      <Link to="/" style={linkStyle}>Home</Link>|
      <Link to="/about"style={linkStyle}>About</Link>
    </header>
  )
}

const headerStyle = {
  padding: '10px',
  textAlign: 'center',
  background: '#333',
  color: '#fff'
}

const linkStyle = {
  color: "#fff",
  textDecoration: 'none',
  padding: '5px'
}
export default Header