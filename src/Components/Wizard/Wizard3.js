import React, {Component} from 'react';
import './Wizard.css';
import {Link} from 'react-router-dom';




export default class Wizard3 extends Component {


    render() {      
        return (
            <div className="wizard">

                <div className="dashboard-flex">
                    <h3>Add New Listing</h3>
                    <Link to="/">
                            <button className="cancel">Cancel</button>
                    </Link>
                </div>

                <h5>
                    Recommended Rent: $0
                </h5>

                <div>Monthly Mortgage Amount</div>
                    <input
                    className="input"
                    type="number" 
                    placeholder="0"
                    // onChange={e => this.handleImageChange(e)}
                    name='mortgage'
                    // value={this.state.image}
                    />

                <div>Desired Monthly Rent</div>
                    <input
                    className="input"
                    type="number" 
                    placeholder="0"
                    // onChange={e => this.handleImageChange(e)}
                    name='rent'
                    // value={this.state.image}
                    />

                <button className="complete-btn" onClick={() => this.props.history.push("/wizard2")}>Previous Step</button>
            <button className="complete-btn" onClick={() => this.props.history.push("/")}>Complete</button>
            </div>
        )
    }
}