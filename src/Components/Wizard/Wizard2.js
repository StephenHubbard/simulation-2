import React, {Component} from 'react';
import './Wizard.css';
import {Link} from 'react-router-dom';


export default class Wizard2 extends Component {
    

    handleImageChange(e) {
        this.props.setState({
            name: e.target.value
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

                <div>Image Url</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder="Image Url"
                    // onChange={e => this.handleImageChange(e)}
                    name='zipcode'
                    // value={this.state.image}
                    />


            <button className="complete-btn" onClick={() => this.props.history.push("/wizard")}>Previous Step</button>
            <button className="complete-btn" onClick={() => this.props.history.push("/wizard3")}>Next Step</button>


            </div>
        )
    }
}