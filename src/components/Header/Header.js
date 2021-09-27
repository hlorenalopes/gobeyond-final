import React from 'react';

const Header = () => {
  return (
    <header className='container'>
      <div className='row row-header'>
        <div className='col col-header'>
          <img src='logo-corebiz-global.svg' alt='Corebiz' />
        </div>
        <div className='col col-header'>
          <nav className='navBar'>
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
