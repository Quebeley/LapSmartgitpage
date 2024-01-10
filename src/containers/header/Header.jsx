import React from 'react'
import './header.css';
import lapSimple from '../../assets/lapSimple.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Unleash your driving potential with LapSmart</h1>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your email'></input>
          <button type='button'>I'm interested</button>
        </div>
      </div>

      {/* skipped people div here */}

      <div className='gpt3__header-image'>
        <img src={lapSimple} atl='lapSimple' />
      </div>
    </div>
  )
}

export default Header
