import React from 'react'
import Add from "../assets/addAvatar.png";

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Chattier</span>
            <span className="title">Register</span>
            <form >
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:'none'}} type="file" id='file' />
                <label htmlFor='file'>
                  <img src={Add} alt="" />
                  <span>Add an Avatar</span>
                </label>
                <button className='button'>
                    Sign up<span className='button-border'></span>
                    </button>
                <p>Do you have an account? Login</p>
            </form>
        </div>
    </div>
  )
}
