// Header.js
import React from 'react';
import './header.css';

function Header() {
  return (
    <div className='header'>
      <div className='header__search'>
        <input className='header__searchInput' type="text" />
      </div>
      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'> Stores & Services   </span>

          <span className='header__optionLineTwo'>      Choose your stores      </span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>  Community  </span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>  Sign In </span>
          <span className='header__optionLineTwo'> for free shipping </span>
        </div>
      </div>
    </div>
  );
}

export default Header;