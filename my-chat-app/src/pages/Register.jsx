import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
    <span className="logo">Chatier</span>
    <span className="title">Register</span>
        <form>
            <input type='text ' placeholder='display name'/>
            <input type='email' placeholder="email" />
            <input type='password' placeholder="password"/>
            <input style={{display:'none'}}type="file" id='file'/>
            <label style={{cursor:'pointer'}} htmlFor='file'>choose file</label>
            <button>Sign up</button>
        </form>
        <p>Do you already have a account? Login</p>
    </div>
</div>
   
  )
}

export default Register
