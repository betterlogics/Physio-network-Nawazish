import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div className='Main_bg'>
      <h3 className='Main_content'>Log in</h3>
      <p>Log in to your account or <a className='login_a' href="#">register here!</a></p>
      <div className="container">
        <div className="row justify-content-center">
            
            <div className="col-lg-5">
                
                <div className="card Main_card">
                    <div className="card-body">
                        <input type="email" className='iput_log' placeholder='Enter your Email' />
                        <input type="email" className='iput_log mt-3' placeholder='Enter your Password' />
                        <div>
                        <a className='apass' href="#">Forgot your password?</a>
                        </div>
                        <button className='btn log_btn '>Log in </button>


                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
