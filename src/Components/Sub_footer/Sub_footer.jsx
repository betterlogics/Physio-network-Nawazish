import React from 'react'
import "./Sub_footer.css"
import { FaFacebook } from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
function Sub_footer() {
  return (
    <div className='Footer_main'>
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8 mt-3">
                <button className='btn fo_btn '>Term and conditions</button>
                <button className='btn fo_btn'>pravicy</button>
                <button className='btn fo_btn'>FAqs</button>
                <button className='btn fo_btn'>Contact</button>
            </div>
        </div>
        <p className='mt-3 fs-6'>© 2022 Physio Network | Australian Business Number: 33621578167</p>
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <FaFacebook className='footer_icons'></FaFacebook>
                <BsInstagram className='footer_icons'></BsInstagram>
                <AiOutlineTwitter className='footer_icons'></AiOutlineTwitter>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sub_footer
