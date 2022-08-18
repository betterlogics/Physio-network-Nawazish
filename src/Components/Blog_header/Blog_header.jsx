import React from 'react'
import "./Blog.css"

function Blog_header() {
  return (
    <div className='Blog_bg'>
        <h1 className='alin'>Blog</h1>
        <p className='align_p'>We have the biggest collection of physio blogs online. Explore 285 blogs now!</p>
    <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
            <form action="https://www.physio-network.com" class="relative"> <input type="text" name="s" placeholder="Search..." class="w-full rounded-md bg-white text-gray py-4 px-5 shadow-search-input border border-[#CAD0DB]"/> <input type="hidden" name="type" value="post"/> <button type="submit" class="absolute top-1/2 right-4 transform -translate-y-2/4 cursor-pointer text-gray hover:text-black transition-colors"> <svg width="18" height="26" viewBox="0 0 25 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M24.6196 23.6823L18.4566 17.2464C20.0413 15.3546 20.9093 12.9745 20.9093 10.4976C20.9092 4.7093 16.2195 0 10.4547 0C4.69007 0 0 4.7093 0 10.4976C0 16.2856 4.69007 20.9954 10.4547 20.9954C12.6185 20.9954 14.6807 20.3397 16.4446 19.0958L22.6539 25.5801C22.9133 25.8509 23.2624 25.9999 23.6368 25.9999C23.9908 25.9999 24.3272 25.8646 24.5822 25.6183C25.1239 25.0947 25.1414 24.2271 24.6196 23.6823ZM10.4547 2.73902C14.7153 2.73902 18.1824 6.21899 18.1824 10.4976C18.1824 14.7759 14.7153 18.2567 10.4547 18.2567C6.19354 18.2567 2.72739 14.7759 2.72739 10.4976C2.72739 6.21907 6.19354 2.73902 10.4547 2.73902Z" fill="currentColor"></path> </svg> </button></form>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Blog_header
