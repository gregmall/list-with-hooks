import React, { useEffect, useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import DetailDisplay from '../../components/detail-display/DetailDisplay';
import { getById } from '../../services/getById';





const Detail = ({ match }) => {

  const [detail, setDetail] = useState({});
  const characterId = match.params.id;
  

  useEffect(() => {
    getById(characterId)
    .then(detail => setDetail(detail))
  }, []);
  console.log(detail)
  
  return(
    

    <DetailDisplay detail={detail} />
  );
};

export default Detail;
