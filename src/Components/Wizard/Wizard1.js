import React, {Component} from 'react';
import './Wizard.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZipcode } from '../../ducks/reducer';



class Wizard1 extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    

    render() { 
        
        const { updateName, updateAddress, updateCity, updateState, updateZipcode } = this.props;
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
                    placeholder={this.props.name}
                    onChange={e => updateName(e.target.value)}
                    name='name'
                    // value={this.state.name}
                    />
                

                <div>Address</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder={this.props.address}
                    onChange={e => updateAddress(e.target.value)}
                    name='address'
                    // value={this.state.address}
                    />

                <div>City</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder={this.props.city}
                    onChange={e => updateCity(e.target.value)}
                    name='city'
                    // value={this.state.city}
                    />

                <div>State</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder={this.props.st}
                    onChange={e => updateState(e.target.value)}
                    name='state'
                    // value={this.state.state}
                    />

                <div>Zip</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder={this.props.zipcode}
                    onChange={e => updateZipcode(e.target.value)}
                    name='zipcode'
                    // value={this.state.zipcode}
                    />
            
            
            </div>

            <button className="complete-btn" onClick={() => this.props.history.push("/")}>Back</button>
            <button className="complete-btn" onClick={() => this.props.history.push("/wizard2")}>Next Step</button>





            </div>
        )
    }
}

    function mapStateToProps( state ) {
        const { name, address, city, st, zipcode } = state;

        return {
            name,
            address,
            city, 
            st, 
            zipcode
        };
    }

export default connect( mapStateToProps, {updateName, updateAddress, updateCity, updateState, updateZipcode } )( Wizard1)