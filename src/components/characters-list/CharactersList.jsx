
import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  console.log(characters)
  const characterElements = characters.map(character => (
    <Link to = {`/detail/${character.id}`} key={`${character.id}`}>
    <li key={`${character.id}`}>
      <Character  {...character } />
    </li>
    </Link>
  ));

  return (
    <ul data-testid="characters">
      {characterElements}
    </ul> 
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
   
    
  })).isRequired
};

export default CharacterList;
