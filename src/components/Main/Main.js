import React, { useState, useEffect } from 'react';

const Main = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [photo, setPhoto] = useState([
    { albumId: '', id: '', title: '', url: '', thumbnailUrl: '' },
    { albumId: '', id: '', title: '', url: '', thumbnailUrl: '' },
    { albumId: '', id: '', title: '', url: '', thumbnailUrl: '' },
    { albumId: '', id: '', title: '', url: '', thumbnailUrl: '' },
  ]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4',
      );
      const json = await res.json();

      setPhoto(json);
    };

    getData();
  }, []);

  return (
    <main className='container'>
      <div className='row row-main'>
        <div className='col col-main col-main-left'>
          <h1>{photo[activeContent].title}</h1>
          <a className='btn-link' href='https://www.corebiz.ag/'>
            veja mais
            <img src='arrow-circle.svg' alt='Arrow Icon' />
          </a>
          <div className='row'>
            <button
              onClick={() => setActiveContent(0)}
              className={`${
                activeContent === 0 ? 'tab-active' : 'tab-inactive'
              }`}
              style={{ backgroundImage: `url(${photo[0].thumbnailUrl})` }}
            ></button>
            <button
              onClick={() => setActiveContent(1)}
              className={`${
                activeContent === 1 ? 'tab-active' : 'tab-inactive'
              }`}
              style={{ backgroundImage: `url(${photo[1].thumbnailUrl})` }}
            ></button>
            <button
              onClick={() => setActiveContent(2)}
              className={`${
                activeContent === 2 ? 'tab-active' : 'tab-inactive'
              }`}
              style={{
                backgroundImage: `url(${photo[2].thumbnailUrl})`,
              }}
            ></button>
            <button
              onClick={() => setActiveContent(3)}
              className={`${
                activeContent === 3 ? 'tab-active' : 'tab-inactive'
              }`}
              style={{ backgroundImage: `url(${photo[3].thumbnailUrl})` }}
            ></button>
          </div>
        </div>
        <div className='col col-main col-main-right'>
          <div
            className='bigImg'
            style={{ backgroundImage: `url(${photo[activeContent].url})` }}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default Main;
