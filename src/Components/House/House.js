import React, {Component} from 'react';
// import axios from 'axios';
import './House.css';



export default class House extends Component {
    constructor() {
        super()
    
        this.state = {
            
        }
        
    
    }

    render() {      
        return (
            <div className="house">

                <div className="info-container">
                    <img src={this.props.houseObj.image} />
                    <div className="info-box">
                        <h5>Property Name: {this.props.houseObj.name}</h5>
                        <h5>Address: {this.props.houseObj.address}</h5>
                        <h5>City: {this.props.houseObj.city}</h5>
                        <h5>State: {this.props.houseObj.st}</h5>
                        <h5>Zip: {this.props.houseObj.zipcode}</h5>
                        <h5>Mortgage: ${this.props.houseObj.mortgage}</h5>
                        <h5>Desired Rent: ${this.props.houseObj.rent}</h5>
                    </div>
                </div>


                <button className="delete" onClick={() => this.props.deleteHouseFn(this.props.houseObj.id)}>Delete</button>
            </div>
        )
    }
}