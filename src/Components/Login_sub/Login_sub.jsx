import React from 'react';
import "./Login_sub.css";
import { FaBook } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Login_sub() {
  return (
  
    <div className='sub_main'>
       
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                <h2 className='sub_h2'>From the blog...</h2>
                    <p>  <FaBook className='sub_icon'></FaBook> <span ><a  className='Sub_footer' href="#">A short thread  on exercise selection for subac...</a></span></p>
                    <p>  <FaBook className='sub_icon'></FaBook> <span ><a  className='Sub_footer' href="#">A short thread  on exercise for subac...</a></span></p>
                    <p>  <FaBook className='sub_icon'></FaBook> <span ><a  className='Sub_footer' href="#">A short thread on exercise selection for subac...</a></span></p>
               <a className='Sub_footer' href="#">More tim.....</a><br />

               <button className='btn  mt-2 btnf'>More  </button>
                </div>
                <div className="col-lg-4">
                <h2 className='sub_h2'>Subscribe..</h2>
                    <p>Get exclusive learning material for free.</p>
                    <div class="input-group">
                         <input class="form-control required email" type="text" name="email" placeholder="Email address..."/>
                    <div class="input-group-append">
                        <button type="button" class="btn btn-black f-btn-recaptcha" name="subscribe">JOIN</button>
                        </div>
                        </div>
                        <p class="mc-notice-text mt-2">By subscribing to our newsletter you agree to the 
                        <a className='foot_a'  href="https://www.physio-network.com/terms-and-conditions/" target="_blank">Terms &amp; Conditions</a>
                         and <a  className='foot_a' href="https://www.physio-network.com/privacy-policy/" target="_blank">Privacy Policy</a>.
                          You also agree to receive marketing-related emails which you can unsubscribe from at any time.</p>
                    
   
</div>
<div className="col-lg-4">
<h2 className='sub_h2'>Contact...</h2>
                <p>Physio Network,<br/> 18-20 Hill Street,<br/> Emu Park,<br/> Queensland,<br/> Australia, 4710</p>
                   <button className='btn btnf '>GET IN TOUCH</button>
                </div>

                </div>
               
            </div>
        </div>
      
   
      

  )
}

export default Login_sub
