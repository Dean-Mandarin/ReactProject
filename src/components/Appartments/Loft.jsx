import React from 'react';

const Loft = ({ className, img, text }) => {
  return (
    <div className={`${className} loft anim-items`}>
      <img src={img} width="100%"/>
      <p>{text}</p>
    </div>
  );
};

export default Loft;