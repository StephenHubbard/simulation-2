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
            <div>

                <div className="info-container">
                    <h3>{this.props.houseObj.name}</h3>
                    <h5>{this.props.houseObj.address}</h5>
                    <h5>{this.props.houseObj.city}</h5>
                    <h5>{this.props.houseObj.state}</h5>
                    <h5>{this.props.houseObj.zipcode}</h5>
                </div>


                <button className="delete" onClick={() => this.props.deleteHouseFn(this.props.houseObj.id)}>Delete</button>
            </div>
        )
    }
}