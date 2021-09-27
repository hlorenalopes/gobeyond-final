import React from 'react';

const Photo = (url) => {
  return (
    <div className='bigImg' style={{ backgroundImage: `url(${url})` }}></div>
  );
};

export default Photo;
