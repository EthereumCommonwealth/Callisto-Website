import React from 'react';

const CheckElement = ({ img, text }) => (
  <div className='CheckElement square'>
    <figure className='CheckElement-figure'>
      <img src={img} alt={text}/>
    </figure>
    <p className='CheckElement-text'>
      {text}
    </p>
  </div>
);

export default CheckElement;
