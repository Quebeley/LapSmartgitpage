import React from 'react'
import './header.css';
import lapSimple from '../../assets/lapSimple.png';


const Header = () => {
  // Function to handle click event
  const handleButtonClick = () => {
    // Redirects to the specified URL
    window.location.href = 'https://forms.gle/51sV5vQzRdwomYRH8';
  };

  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Unleash your driving potential with LapSmart</h1>
        <p>Welcome to the next generation driving assistance platform!</p>

        <div className='gpt3__header-content__input'>
          {/* <input type='email' placeholder='Your email'></input> */}
          <button type='button' onClick={handleButtonClick}>I'm interested</button>
        </div>
      </div>

      {/* skipped people div here */}

      <div className='gpt3__header-image'>
        <img src={lapSimple} alt='lapSmart' />
      </div>
    </div>
  );
};

export default Header;
