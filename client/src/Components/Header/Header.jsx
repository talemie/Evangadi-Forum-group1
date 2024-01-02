
import React from 'react'
import { Link } from 'react-router-dom'
function Header() {



  return (
    <div className='flex space-x-[626px]  container pl-[104px] pt-[22px] pb-[22px]'>
      <img src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png" alt="Evangadi Logo" />
      <div className='container  flex space-x-4 '>
        <Link className=' hover:text-orange-500' to="/Home">Home</Link>
        <Link className=' hover:text-orange-500' to="/explained">How it Works </Link>
        <Link className=  ' hover:text-orange-500' to="/sign in">SIGN IN</Link>
      </div>

    </div>
  )
}

export default Header
