import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='row row-footer'>
        <div className='col container col-footer-left'>
          <div className='row'>
            <div className='col'>
              <img
                className='logo'
                src='logo-corebiz-preta.svg'
                alt='Logo Corebiz'
              />
              <p>direitos reservados. corebiz 2021</p>
              <div className='row icons'>
                <a href='https://pt-br.facebook.com/corebiz.ag/'>
                  <img src='facebook.svg' alt='Facebook' />
                </a>
                <a href='https://www.instagram.com/corebizag/'>
                  <img src='instagram.svg' alt='Instagram' />
                </a>
                <a href='https://www.linkedin.com/company/corebiz-brasil'>
                  <img src='linkedin.svg' alt='LinkedIn' />
                </a>
              </div>
            </div>
            <div className='col links'>
              <a href='https://www.corebiz.ag/pt/about/'>a corebiz</a>
              <div className='line'></div>
              <a href='https://www.corebiz.ag/pt/#framework-title'>serviços</a>
              <div className='line'></div>
              <a href='https://www.corebiz.ag/pt/cases/'>cases</a>
              <div className='line'></div>
              <a href='https://www.corebiz.ag/pt/contato/'>contato</a>
              <div className='line'></div>
            </div>
          </div>
        </div>
        <div className='col container col-footer-right'>
          <div className='row address'>
            <div className='col col1'>
              <h4>.Brasil</h4>
              <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
              <p>
                R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP
              </p>
            </div>
            <div className='col col2'>
              <h4>.Argentina</h4>
              <p>Soler 5518, 3 Piso C1425BYF</p>
              <p>Palermo Hollywood CABA</p>
            </div>
            <div className='col col3'>
              <h4>.México</h4>
              <p>
                Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo,
                11520
              </p>
              <p>Ciudad de México, CDMX</p>
            </div>
            <div className='col col4'>
              <h4>.Chile</h4>
              <p>Roberto del Rio 1137,</p>
              <p>Providencia.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
