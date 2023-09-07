import React from 'react'

import { Link } from 'react-router-dom'

function Header(props) {
 
  return (
<>

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-4`}>
  <Link className="navbar-brand" to="#"><img src="https://cdn-icons-png.flaticon.com/128/681/681803.png" alt="navimg" className='img-fluid'/>IndNews</Link>

<div className='ms-auto'>
  
    <ul className="navbar-nav ms-auto">
    
    <div className="form-check form-switch">
  <input className="form-check-input" style={{backgroundColor:'#00f635'}} type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
  <label className="form-check-label" for="flexSwitchCheckDefault">{props.mode === 'light' ? 'Dark' : 'Light'}</label>
</div>
      
    </ul>
    
  </div>
</nav>
</>
  )
}

export default Header