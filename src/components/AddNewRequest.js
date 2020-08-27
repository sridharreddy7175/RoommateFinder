import React, { useState, useEffect } from 'react'
import axios from 'axios'
const AddNewRequest = () => {
    const [location, setLocation] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [rent, setRent] = useState('');
    const [roommate, setRoommate] = useState('')

    const submitRoommate = (e) => {
        e.preventDefault();
        let obj1 = {
            location: location,
            city: city,
            gender: gender,
            rent: rent,
            roommate: roommate
        }
        console.log(obj1)
        axios.post('http://localhost:5000/api/requests', obj1)
        .then(res => {console.log(res)
            localStorage.setItem("userId", res.data)
            window.location.href='/'
        })
        .catch(err => console.log(err))
        setLocation('');
        setCity('');
        setGender('');
        setRent('');
        setRoommate('');
    }
    return (
        <div>
            <div className="container mt-3">
                <h3 className="mt-2">POST NEW REQUEST</h3>
                <form>
                    <label htmlFor="" className="mt-2">Location</label>
                    <input type="text" name="location" className="form-control w-50"
                        style={{ margin: "auto" }} placeholder="Location" value={location}
                        onChange={e => setLocation(e.target.value)} />
                    <label htmlFor="" className="mt-2">City</label>
                    <select className="form-control w-50" style={{ margin: "auto" }} name="city" value={city}
                        onChange={e => setCity(e.target.value)}>
                        <option>-City-</option>
                        <option>Hyderabad</option>
                        <option>Vizag</option>
                        <option>Banglore</option>
                        <option>Chennai</option>
                        <option>Kurnool</option>
                        <option>Kadapa</option>
                    </select>
                    <label htmlFor="" className="mt-2">Gender</label>
                    <select className="form-control w-50" style={{ margin: "auto" }} name="gender" value={gender}
                        onChange={e => setGender(e.target.value)}>
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <label htmlFor="" className="mt-2">Rent</label>
                    <input type="text" name="rent" className="form-control w-50"
                        style={{ margin: "auto" }} placeholder="Rent" name="rent" value={rent}
                        onChange={e => setRent(e.target.value)} />
                    <label htmlFor="" className="mt-2">RoomMates</label>
                    <select className="form-control w-50" style={{ margin: "auto" }} name="roommate" value={roommate}
                        onChange={e => setRoommate(e.target.value)}>
                        <option>RoomMate</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <button className="btn btn-lg btn-primary btn-block mt-4 w-50"
                        style={{ margin: "auto" }}
                        onClick={submitRoommate} >Submit</button>
                </form>
            </div>
        </div>
    )
}
export default AddNewRequest;