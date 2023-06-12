import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const Empdetail = () => {

  const { daid } = useParams();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/usrs/"+daid).then((res) => {
      return res.json();
    }).then((resp) => {
      empdatachange(resp);
      console.log(empdatachange)
    }).catch((err) => {
      console.log(err.massage); 
    })
  }, [])

  return (
    <div className='containar'>

      {empdata &&
        <>
          <h1> Contact detail is : {empdata.name} ({empdata.id}) </h1>
          <h2> email detail is : {empdata.email}  </h2>
          <h2> pepole detail is : {empdata.pepole}  </h2>
          <h2> phone detail is : {empdata.phone}  </h2>
          <h2> eventTime detail is : {empdata.eventTime}  </h2>
          <h2> eventDate detail is : {empdata.eventDate}  </h2>
          <h2> eventDescription detail is : {empdata.eventDescription}  </h2>
        </>
      }
    <Link className='btn btn-success' to='/'> Goto Data

    </Link>
    </div>
  )
}

export default Empdetail