import React, {Component} from 'react';
import './Wizard.css';
import {Link} from 'react-router-dom';
import axios from 'axios';



export default class Wizard1 extends Component {
    constructor() {
        super()
    
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            image: '', 
            mortgage: '', 
            rent: '',
        }  
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleAddressChange(e) {
        this.setState({
            address: e.target.value
        })
    }
    handleCityChange(e) {
        this.setState({
            city: e.target.value
        })
    }
    handleStateChange(e) {
        this.setState({
            state: e.target.value
        })
    }
    handleZipChange(e) {
        this.setState({
            zipcode: e.target.value
        })
    }

    newHouse() {
        axios
            .post('/api/houses', this.state)
            .then(res => {
                this.setState({
                    houses: res.data
                })
            this.props.history.push('/')
            })
    }

    render() {      
        return (
            <div className="wizard">
                <div className="dashboard-flex">
                    <h3>Add New Listing</h3>
                    <Link to="/">
                            <button className="cancel">Cancel</button>
                    </Link>
                </div>

            <div className="input-box-container">

                <div>Property Name</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder="Name"
                    onChange={e => this.handleNameChange(e)}
                    name='name'
                    value={this.state.name}
                    />
                

                <div>Address</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder="Address"
                    onChange={e => this.handleAddressChange(e)}
                    name='address'
                    value={this.state.address}
                    />

                <div>City</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder="City"
                    onChange={e => this.handleCityChange(e)}
                    name='city'
                    value={this.state.city}
                    />

                <div>State</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder="State"
                    onChange={e => this.handleStateChange(e)}
                    name='state'
                    value={this.state.state}
                    />

                <div>Zip</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder="Zipcode"
                    onChange={e => this.handleZipChange(e)}
                    name='zipcode'
                    value={this.state.zipcode}
                    />
            
            
            </div>

            <button className="complete-btn" onClick={() => this.newHouse()}>Complete</button>
            <button className="complete-btn" onClick={() => this.props.history.push("/wizard2")}>Next Step</button>





            </div>
        )
    }
}