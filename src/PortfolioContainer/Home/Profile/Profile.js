import React from 'react';
import { Simulate } from 'react-dom/test-utils';
//import Typical from 'react-typical';
import './Profile.css';
export default function Profile() {
  return( 
  <div className='profile-container'>
      <div className='profile-parent'>
          <div className='profile-details'>
              <div className='colz'>
                  <div className='colz-icon'>
                    <a href='https://www.facebook.com/profile.php?id=100077074974316'>
                      <i className='fa fa-facebook'>
                          
                      </i>
                  </a>
                  <a href='https://www.instagram.com/ananyaananth29/'>
                      <i className='fa fa-instagram'>

                      </i>
                  </a>
                  <a href='https://www.youtube.com/channel/UCVdMnflUgGcfJZSpfKzngMg'>
                      <i className='fa fa-youtube'>

                      </i>
                  </a>
                  <a href='https://www.linkedin.com/in/ananyaananth/'>
                      <i className='fa fa-linkedin'>

                      </i>
                  </a>
                  <a href='https://github.com/ananyaananth29'>
                      <i className='fa fa-github'>

                      </i>
                  </a>
                  </div>
                </div>
                <div  className='profile-details-name'>
                        <span className='primary-text'>
                            Hello, I am <span className='highlighted-text'>Ananya Ananth</span>
                        </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        <h1>
                            React enthusiast!
                        </h1>
                        <span className='profile-role-tagline'>
                            Nitte Meenakshi Institute of Technology
                        </span>
                    </span>
                </div>
              <div className='profile-options'>
                  <button className='btn primary-btn'>
                      {""}
                      Hire Me{" "}
                  </button>
                  <a href="https://drive.google.com/file/d/1NWno6AE4TTbfwRrcJxoUYO7-Xsr-AmKX/view?usp=sharing" download="Ananya Ananth.pdf">
                      <button className='btn highlighted-btn'>Get Resume</button>
                  </a>

              </div>

            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    </div>);
}
