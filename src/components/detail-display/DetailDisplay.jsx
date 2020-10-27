import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DetailDisplay = ({ 
          name,
          image,
          status,
          gender,
          created
        }) => (
  <div>
    
  <h1>Name: {name}</h1>
  <img src={image}/>
  <h2>Status: {status}</h2>
  <h2>Gender: {gender}</h2>
  <h2>Created: {created}</h2>
  <Link to="/"><button>GO BACK</button></Link>
  
</div>
 
  
);

DetailDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired
};


export default DetailDisplay;
