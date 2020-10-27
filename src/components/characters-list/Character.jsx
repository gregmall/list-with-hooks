import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image, name }) => (
  <div>
    <p>{name}</p>
    <img src={image}/>
    
    </div>
  
 );

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
  
};

export default Character;
