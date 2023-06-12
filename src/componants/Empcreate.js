import React from "react"
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Empcreate = () => {

    // Form validation by useState/ store value in local storage/ 

    const [id, setId] = useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [people, setPeople] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [validation, setValidation] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const empdata = {
            name,
            email,
            phone,
            people,
            eventDate,
            eventTime,
            eventDescription
        };

        fetch("http://localhost:3001/usrs", {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        })
            .then((res) => {
                navigate('/');
                alert("Saved successfully.");
            })
            .catch((err) => {
                console.log(err.message);
            });

        setName('');
        setEmail('');
        setPhone('');
        setPeople('');
        setEventDate('');
        setEventTime('');
        setEventDescription('');
    };



    return (

        <div >
            <h1 className='mt-5' style={{ textAlign: 'center' }}>CATERING ORDER</h1>
            <div className="container py-5">
                <div className="border rounded  p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12">
                                <label>ID</label>
                                <input value={id} disabled='disabled' className="form-control"></input>
                            </div>
                        </div>
                        <div className='row' >
                            <div className="col form_margin my-3 form-group" >
                                <label className='mb-1' htmlFor="name">Name *</label>
                                <input required type="text" className="py-2  form-control" id="name" placeholder="Name*"
                                    value={name}
                                    onMouseDown={(e) => setValidation(true)}
                                    onChange={(e) => setName(e.target.value)} />
                                {name.length == 0 && validation && <span className="text-danger"> Fill the data</span>}
                            </div>
                            <div className="col my-3 form-group">
                                <label className='mb-1' htmlFor="email">Email *</label>
                                <input type="email" className="py-2 form-control" id="email" placeholder="Email*"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col form_margin form-group">
                                <label className='mb-1' htmlFor="phone">Phone Number *</label>
                                <input type="tel" className="py-2 form-control" id="phone" placeholder="Phone Number*"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="col  form-group">
                                <label className='mb-1' htmlFor="people">Number of People *</label>
                                <input type="number" className="py-2 form-control" id="people" placeholder="Number of People*"
                                    value={people}
                                    onChange={(e) => setPeople(e.target.value)} />
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col my-3 form_margin form-group">
                                <label className='mb-1' htmlFor="event-date">Event Date *</label>
                                <input type="date" className="py-2 form-control" id="event-date" placeholder="dd-mm-yyyy"
                                    value={eventDate}
                                    onChange={(e) => setEventDate(e.target.value)} />
                            </div>
                            <div className="col my-3 form-group">
                                <label className='mb-1' htmlFor="event-time">Event Time *</label>
                                <input type="time" className="py-2 form-control" id="event-time" placeholder="--:-- --"
                                    value={eventTime}
                                    onChange={(e) => setEventTime(e.target.value)} />
                            </div>
                        </div>

                        <div className="my-3 form-group">
                            <label className='mb-1' htmlFor="event-description">Describe the Event *</label>
                            <textarea className="py-4 form-control" id="event-description" rows="3" placeholder="Describe the event"
                                value={eventDescription}
                                onChange={(e) => setEventDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className='container' >
                            <h4 className='mt-4'>Will Your Event Require:</h4>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="warming-dishes" />
                                <label className="mb-1 form-check-label" htmlFor="warming-dishes">Warming Dishes</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="serving-utensils" />
                                <label className="mb-1 form-check-label" htmlFor="serving-utensils">Serving Utensils</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="lines" />
                                <label className="mb-1 form-check-label" htmlFor="lines">Lines</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wait-staff" />
                                <label className="mb-1 form-check-label" htmlFor="wait-staff">Wait Staff</label>
                            </div>
                            <p className="text-danger">** MAY INCLUDE ADDITIONAL CHARGES **</p>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary mt-3">
                                Submit
                            </button>
                            <Link className="btn btn-success mt-3" to='/' > Watch detail</Link>
                        </div>
                    </form>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}



export default Empcreate
































































{/* {
    !isEditing ?

        <div>
            <button type="submit" className="btn btn-primary mt-3">
                Submit
            </button>
        </div>
        :
        <div>
            <button
                type="button"
                className="btn btn-primary mt-3"
                style={{ borderRadius: '50px' }}
                onClick={() => setIsEditing(false)}
            >
                Edit
            </button>
        </div>
} */}


