export const getNameApi= () =>{
  return fetch('https://rickandmortyapi.com/api/character')
  .then(res => res.json())
  .then(json => json.results);
  
};
