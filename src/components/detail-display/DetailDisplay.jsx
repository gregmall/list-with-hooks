import React from 'react';
import PropTypes from 'prop-types';


const DetailDisplay = ({ detail }) => (
  <div>
    
    <h1 data-testid ="detail">Name: {detail.name}</h1>
    <img src={detail.image}/>
    <h2>Status: {detail.status}</h2>
    <h2>Gender: {detail.gender}</h2>
  < h2>Created: {detail.created}</h2>
    <a href="/"><button>GO BACK</button></a>
  
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
