import React, { useState, useEffect } from 'react';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <header className='container containerHeader'>
      <div className='row row-header'>
        <div className='col'>
          <img
            className='logoHeader'
            src='logo-corebiz-global.svg'
            alt='Corebiz'
          />
          {screenWidth <= 768 && (
            <button className='toggleMenu' onClick={handleToggle}>
              <div className='toggleBar'></div>
              <div className='toggleBar'></div>
              <div className='toggleBar'></div>
            </button>
          )}
        </div>

        <div className='col colNav'>
          <nav className='navBar'>
            {(toggleMenu || screenWidth > 768) && (
              <ul>
                <li>
                  <a href='https://www.corebiz.ag/pt/about/'>a corebiz</a>
                </li>
                <li>
                  <a href='https://www.corebiz.ag/pt/#framework-title'>
                    serviços
                  </a>
                </li>
                <li>
                  <a href='https://www.corebiz.ag/pt/cases/'>cases</a>
                </li>
                <li>
                  <a href='https://www.corebiz.ag/pt/contato/'>contato</a>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
