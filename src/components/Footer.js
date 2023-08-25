import React from 'react'

export default function Footer() {
  return (
    <div className="card text-center " style={{background:'#343a40',color:'white',width:'100vw',marginTop:'20px'}}>
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title" style={{fontFamily:'Lato'}}>Copyright &copy; R SIDHARTHA 2023. All rights reserved.</h5>
    <p className="card-text">This website showcases the work and accomplishments of a dedicated student aspiring to make an impact in web development. It serves as a platform to display my skills, projects, and experiences gained throughout my educational journey.
For inquiries or collaborations, please contact me at <a href="mailto:sidiitn516@gmail.com">sidiitn516@gmail.com</a>
</p>
<p>
Thank you for visiting and exploring my portfolio!</p>
    {/* <a href="./" className="btn btn-primary">Go somewhere</a> */}
    <h6 className="card-title" style={{fontFamily:'Lato'}}>Designed and developed by R SIDHARTHA.</h6>
  </div>
</div>
  )
}
