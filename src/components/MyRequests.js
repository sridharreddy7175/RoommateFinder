import React, { useState, useEffect } from 'react'
import axios from 'axios'
const MyRequests = () => {
    const [requests, setRequests] = useState([]);

    const fetchData = () => {
        axios.get('http://localhost:5000/api/requests')
            .then((requests) => {
                console.log(requests)
                setRequests(requests.data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchData()
    }, [])
    const onDelete = (id) => {
        axios.delete('http://localhost:5000/api/requests/' + id)
            .then((response) => fetchData())
    }
    return (
        <div>
            <div className="container">
                <h1 className="mt-5" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Requests</h1>
                <div className="">
                    {
                        requests.map((request) => {
                            return <div key={request._id}>
                                <div>{request.location}-{request.city}</div>
                                <div>Roommates Needed: {request.roomates}</div>
                                <div>Rent: Rs {request.rent}</div>
                                <button onClick={() => onDelete(request._id)}> Delete</button>
                            </div>
                        })
                    }
                </div>

            </div>
        </div>
    )
}
export default MyRequests;
