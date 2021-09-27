import React, { useState, useEffect } from 'react';

const Main = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4',
      );
      const json = await res.json();

      setContent(json);
    };

    fetchData();
  }, []);

  return (
    <main className='container'>
      <div className='row row-main'>
        <div className='col col-main col-main-left'>
          {content[activeContent].map(({ title }, index) => (
            <h1 key={index}>{title}</h1>
          ))}
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
              style={{ backgroundImage: `url${content[0].thumbnailUrl}` }}
            ></button>
            <button
              onClick={() => setActiveContent(1)}
              className={`${
                activeContent === 1 ? 'tab-active' : 'tab-inactive'
              }`}
              style={{ backgroundImage: `url${content[1].thumbnailUrl}` }}
            ></button>
            <button
              onClick={() => setActiveContent(2)}
              className={`${
                activeContent === 2 ? 'tab-active' : 'tab-inactive'
              }`}
              style={{ backgroundImage: `url${content[2].thumbnailUrl}` }}
            ></button>
            <button
              onClick={() => setActiveContent(3)}
              className={`${
                activeContent === 3 ? 'tab-active' : 'tab-inactive'
              }`}
              style={{ backgroundImage: `url${content[3].thumbnailUrl}` }}
            ></button>
          </div>
        </div>
        <div className='col col-main col-main-right'>
          {content[activeContent].map(({ url }, index) => (
            <div
              key={index}
              className='bigImg'
              style={{ backgroundImage: `url(${url})` }}
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
