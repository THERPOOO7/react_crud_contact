import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Emplisting = () => {
  const [empdata,empdatachange] = useState([]);
  const navigate = useNavigate();

  const LoadDetail=(id) =>{
    navigate('/data/detail/'+id)
  }
  const LoadEdit=(id) =>{
    navigate('/data/edit/'+id)
  }
  const Removefunction=(id) =>{
    if(window.confirm('Do you want to Delete ?')){
    fetch("http://localhost:3001/usrs/" +id, {
      method: 'DELETE',
  })
      .then((res) => {
        window.location.reload();
          alert("DELETE successfully.");
      })
      .catch((err) => {
          console.log(err.message);
      });
    }
  }


  useEffect(() => {
    fetch("http://localhost:3001/usrs").then((res) => {
      return res.json();
    }).then((resp) => {
      console.log(resp);
      empdatachange(resp);
    }).catch((err) => {
      console.log(err.massage);
    })
  }, [])
  console.log(empdata)
  return (
        <>
      <div className="container">
        <div className="card mt-5">
          <div className="card-title mt-3">
            <h2>CONTACTED LIST</h2>
          </div>
          <div className="card-body">
            <div className='divbtn mb-2'>
            <Link to='/data/create' className='btn btn-success'>Add Data </Link>
            </div>
            <div className="table table-bordered table_section table-responsive">
            <table className="table">
                <thead>
                  <tr className='bg-dark'>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">People</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Describe Event</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  { 
                  empdata.map(item=>(
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.people}</td>
                      <td>{item.eventDate}</td>
                      <td>{item.eventTime}</td>
                      <td>{item.eventDescription}</td>
                      <td style={{ 'display':'flex','justify-content': 'space-evenly'}}>
                        <button onClick={()=>{LoadEdit(item.id)}} className='btn btn-success'>Edit</button>
                        <button onClick={()=>{Removefunction(item.id)}} className='btn btn-danger'>Remove</button>
                        <button onClick={()=>{LoadDetail(item.id)}} className='btn btn-primary'>details </button></td>

                    </tr>
                  ))
                  }
                  <div>
                    <Link className='btn btn-success' to = '/data/create'> Back</Link>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
         
  )
}

export default Emplisting
        
                 