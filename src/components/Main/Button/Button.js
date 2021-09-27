import React from 'react';

const Button = (thumbnailUrl) => {
  return <button style={{ backgroundImage: `url(${thumbnailUrl})` }}></button>;
};

export default Button;
