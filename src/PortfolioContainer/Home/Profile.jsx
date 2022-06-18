import React from 'react'
import Typical from 'react-typical'
import "../Home/Profile.css"

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                    <a href="https://www.facebook.com/ahsanraaz1523">
                        <i className='fa fa-facebook-square'></i>
                    </a> 
                    <a href="/">
                        <i className='fa fa-google-plus-square'></i>
                    </a> 
                    <a href="/">
                        <i className='fa fa-instagram'></i>
                    </a>
                     <a href="/">
                        <i className='fa fa-youtube-square'></i>
                    </a> 
                    <a href="/">
                        <i className='fa fa-twitter'></i>
                    </a>
                </div>
                </div>
                <div className="profile-details-name">
                    <span className='primary-text'>
                        { " "}
                        Hello, I'm <span className='highLighted'>Ahsan</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className='primary-text'>
                    {" "}
                    <h1>
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Ahsan Tech",
                            1000, 
                            "Front-End Developer",
                            1000,
                             "Web Designer",
                            1000, 
                            "ReactJs Developer",
                            1000,
                        ]}
                        />
                    </h1>
                    <span className='profile-role-tagline'>
                        Knack of building application with front-end operation.
                    </span>
                    </span>
                </div>
               <div className="profile-options">
                   <button className='btn primary-btn'>
                       {" "}
                       Hire Me
                   </button>
                   <a href="ahsancv.pdf" download="ahsancv.pdf">
                       <button className='btn highLighted-btn my-3 m-3'>Get Resume</button>
                   </a>
               </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">
                
                </div>
            </div>
        </div>
    </div>
  )
}
