import React from 'react'
import './Error.css' 
import { Link } from 'react-router-dom' 

const Error = () => {
  return (
    <div className='error-container'>
      <p className='error-message'>404: Page Not Found</p>
      <Link to='/'><button className="go-back-to-cities">GO BACK TO CITIES</button></Link>
    </div>
  )
}

export default Error 

