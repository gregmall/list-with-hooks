import React, { useEffect, useState } from 'react';
import { getNameApi } from '../../services/getNameApi'
import CharacterList from '../../components/characters-list/CharactersList';


const List = () => {

  const [characters, setCharacters ] = useState([]);

  useEffect(() => {
    getNameApi()
    .then(characters => setCharacters(characters))
  }, []);

  return(
   <CharacterList characters={characters} />
  );
};




export default List;
