import React from 'react'
import "./Res_box.css"
import ear from"../Assets/ear.png";

function Res_box() {
  return (
    <div className='Main_box'>
        <div className="container">
            <div className="row mt-3 Res_row">
        <div className="col-lg-5">
            <div className="card Inner_box mar">
                <div className="card-body">
                    <img src={ear} alt="" />
                    <h2 className='Res_h2'>Research Reviews</h2>
                    <p className='para_res'>Our team of experts analyse and summarise the latest and most clinically relevant research in physiotherapy.</p>

                       <button className='btn res_btn'>Access</button>

                </div>
            </div>
        </div>
        <div className="col-lg-5">
            <div className="card Inner_box">
                <div className="card-body">
                    <img src={ear} alt="" />
                    <h2 className='Res_h2'>Research Reviews</h2>
                    <p className='para_res'>Our team of experts analyse and summarise the latest and most clinically relevant research in physiotherapy.</p>

                       <button className='btn res_btn'>Access</button>

                </div>
            </div>
        </div>
            </div>
            <div className="row Res_row mt-4">
        <div className="col-lg-5">
            <div className="card Inner_box ">
                <div className="card-body ">
                    <img src={ear} alt="" />
                    <h2 className='Res_h2'>Research Reviews</h2>
                    <p className='para_res'>Our team of experts analyse and summarise the latest and most clinically relevant research in physiotherapy.</p>

                       <button className='btn res_btn'>Access</button>

                </div>
            </div>
        </div>
        <div className="col-lg-5">
            <div className="card Inner_box">
                <div className="card-body">
                    <img src={ear} alt="" />
                    <h2 className='Res_h2'>Research Reviews</h2>
                    <p className='para_res'>Our team of experts analyse and summarise the latest and most clinically relevant research in physiotherapy.</p>

                       <button className='btn res_btn'>Access</button>

                </div>
            </div>
        </div>
            </div>
        </div>
      
    </div>
  )
}

export default Res_box
