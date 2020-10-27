
import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';


const CharacterList = ({ characters }) => {
  console.log(characters)
  const characterElements = characters.map(character => (
    
    <li key={`${character.id}`}>
      <a href = {`/detail/${character.id}`}>
        <Character  {...character } />
      </a>
    </li>
    
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
