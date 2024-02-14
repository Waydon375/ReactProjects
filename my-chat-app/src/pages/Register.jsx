import React from 'react'

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Chattier</span>
            <span className="title">Register</span>
            <form >
                <input type="text" placeholder='display name' />
                <input type="text" placeholder='email'/>
                <input type="text" placeholder='password'/>
                <input type="file" />
                <button className='button'>
                    Sign up<span className='button-border'></span>
                    </button>
                <p>Do you have an account? Login</p>
            </form>
        </div>
    </div>
  )
}
