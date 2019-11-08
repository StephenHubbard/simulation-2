import React, {Component} from 'react';
import axios from 'axios';
import House from '../House/House';
import './Dashboard.css';
import {Link} from 'react-router-dom';



export default class Dashboard extends Component {
    constructor() {
        super()
    
        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount(){
        axios.get('/api/houses').then(res=> {
        this.setState({
            houses: res.data
            })
        })
    }

    deleteHouse(id) {
        axios   
            .delete(`api/houses/${id}`)
            .then(res => {
                this.componentDidMount()
            })
            .catch(err => console.log(err))
            
    }

    render() {
        let key = 0;          
        return (
            <div className="dashboard">
                <div className="dashboard-flex">
                    <h1>Dashboard</h1>
                    <Link to="/wizard">
                        <button>Add New Property</button>
                    </Link>
                </div>
                <hr />
                <h3>Home Listings</h3>
                
                <div>
                {this.state.houses.map(el => (
                    <House 
                    houseObj={el} key={key++}
                    deleteHouseFn={this.deleteHouse}
                    />
                ))}
            </div>

            </div>
        )
    }
}