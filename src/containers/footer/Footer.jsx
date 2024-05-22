import React from 'react'
import './footer.css';

const Footer = () => {

  const handleRequestAccessClick = () => {
    // Redirects to the specified URL
    window.location.href = 'https://forms.gle/51sV5vQzRdwomYRH8';
  };

  return (
    <div className='gpt3__footer section_padding' id='Download'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Want to become a better driver around the track?</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <button type='button' onClick={handleRequestAccessClick}>Request Early Access</button>
      </div>

      <div className='gpt3__footer-links'>
        {/* <div className='gpt3__footer-links_logo'> 
          <p>LapSmart</p>
          <p>LapSmart LLC, All Rights Reserved</p>
        </div> */}
        {/* <div className='gpt3__footer-links_Links'>
          <p>Facebook</p>
          <p>X (Formerly twitter)</p>
        </div>
        <div className='gpt3__footer-links_Company'>
          <p>About Us</p>
          <p>Terms and Conditions</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </div> */}
      </div>

      <div className='gpt3__footer-copyright'>
        <p>@2023 LapSmart. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer

