import React, {Component} from 'react';
import './Wizard.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZipcode, image, updateMortgage, updateRent } from '../../ducks/reducer';
import axios from 'axios';


class Wizard3 extends Component {

    componentDidMount(){
        console.log(this.props)
    }

    newHouse() {
        axios
            .post('/api/houses', this.props)
            .then(res => {
                this.setState({
                    houses: res.data
                })
            this.props.history.push('/')
            })
    }


    render() {     
        const { updateMortgage, updateRent } = this.props;
        return (
            <div className="wizard">

                <div className="dashboard-flex">
                    <h3>Add New Listing</h3>
                    <Link to="/">
                            <button className="cancel">Cancel</button>
                    </Link>
                </div>

                <h5>
                    Recommended Rent: ${this.props.mortgage * 1.25}
                </h5>

                <div>Monthly Mortgage Amount</div>
                    <input
                    className="input"
                    type="number" 
                    placeholder="0"
                    onChange={e => updateMortgage(e.target.value)}
                    name='mortgage'
                    // value={this.state.image}
                    />

                <div>Desired Monthly Rent</div>
                    <input
                    className="input"
                    type="number" 
                    placeholder="0"
                    onChange={e => updateRent(e.target.value)}
                    name='rent'
                    // value={this.state.image}
                    />

                <button className="complete-btn" onClick={() => this.props.history.push("/wizard2")}>Previous Step</button>
                <button className="complete-btn" onClick={() => this.newHouse()}>Complete</button>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { name, address, city, st, zipcode, image, mortgage, rent } = state;

    return {
        name,
        address,
        city, 
        st, 
        image,
        zipcode,
        mortgage,
        rent,
    };
}

export default connect( mapStateToProps, { updateMortgage, updateRent } )(Wizard3)