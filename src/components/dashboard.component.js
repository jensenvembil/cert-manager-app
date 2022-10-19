import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import * as constants from '../constants';

const Dashboard = () => {
    const [volunteers, setVolunteers] = useState([]);

    console.log(constants.APIHOSTURL);
    useEffect(() => {
        axios.get(constants.APIHOSTURL)
            .then(({ data }) => {
                setVolunteers(data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <div>
{
   volunteers.forEach(element=> {
    <div>{element.youthName}</div>
   })
}
            {/* <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Youth Name</th>
                        <th scope="col">Event Name</th>
                        <th scope="col">Event Date</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>                    
                    {

                        volunteers.map((data) => {
                            <tr>
                                <td>{data._id}</td>
                                <td>{data.youthName}</td>
                                <td>{data.eventName}</td>
                                <td>{data.eventDate}</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table> */}
        </div>
    );
}

export default Dashboard;


