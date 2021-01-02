import React from 'react'

function Header(){
  return(
    <header style={headerStyle}>
      <h1>My Todo List</h1>
    </header>
  )
}

const headerStyle = {
  padding: '10px',
  textAlign: 'center',
  background: '#333',
  color: '#fff'
}
export default Header