import React, { useEffect, useState } from 'react';
import DetailDisplay from '../../components/detail-display/DetailDisplay';
import { getById } from '../../services/getById';





const Detail = props => {

  const [detail, setDetail] = useState({});
  const characterId = props.match.params.id;
  

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
