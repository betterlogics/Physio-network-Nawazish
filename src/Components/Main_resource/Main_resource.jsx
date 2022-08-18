import React from 'react'
import Res_box from '../Res_box/Res_box'
import Res_header from '../Res_header/Res_header'
import Sub_footer from '../Sub_footer/Sub_footer'
import Login_sub from '../Login_sub/Login_sub'
function Main_resource() {
  return (
    <div>
      <Res_header/>
      <Res_box/>
      <Login_sub/>
      <Sub_footer/>
    </div>
  )
}

export default Main_resource
