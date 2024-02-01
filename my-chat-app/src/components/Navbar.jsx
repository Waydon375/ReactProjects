import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chattier</span>
        <div className="user">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FlUaLtUqEuHKjfTzPZDXJijyv53AHP0Klf4O4KB3GQ&s" alt="" />
          <span>John</span>
          <button className='btn-logout'>Logout</button>
        </div>
      
    </div>
  )
}

export default Navbar
