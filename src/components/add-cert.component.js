
import axios from 'axios';
import React, { Component } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import * as constants from '../constants';


export default class AddCert extends Component {

    constructor(props) {
        super(props);

        this.onChangeEventDate = this.onChangeEventDate.bind(this);
        this.onChangeEventName = this.onChangeEventName.bind(this);
        this.onChangeYouthName = this.onChangeYouthName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            youthName: '',
            eventName: '',
            eventDate: new Date(),

        }
    }

    // componentDidMount() {
    //     this.setState({
    //         youthName: ["Jensen Vembil"]

    //     })
    // }

    onChangeYouthName(e) {
        this.setState({youthName: e.target.value})
        console.log(`Youth Name: `+ this.youthName);
    }

    onChangeEventName(e) {
        this.setState({eventName: e.target.value})
        console.log(`Event Name: `+ this.eventName);
    }

    onChangeEventDate(date) {
        this.setState({eventDate: date})
        
        console.log(`Event Date: `+ this.eventDate);
    }

    onSubmit(e) {
        console.log(e);
        e.preventDefault();
        const certData = {
            youthName: this.state.youthName,
            eventDate: this.state.eventDate,
            eventName: this.state.eventName,
        }
        console.log(certData);
        axios.post(constants.APIHOSTURL+'create', certData)
        .then(res => console.log(res.data));

        window.location = '/';
    }




    render() {
        return (
            <div>
                <h3>Create new Certificate</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Youth Name: </label>
                        <input type="text" required className="form-control" value={this.state.youthName} onChange={this.onChangeYouthName} />
                    </div>
                    <div className='form-group'>
                        <label>Event Name: </label>
                        <input type="text" required className="form-control" value={this.state.eventName} onChange={this.onChangeEventName} />
                    </div>
                    <div className='form-group'>
                        <label>Event Date: </label>
                        <div>
                            <ReactDatePicker selected={this.state.eventDate} onChange={this.onChangeEventDate} />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Certificate" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}


//<h1>This is place holder for add in certificates</h1>