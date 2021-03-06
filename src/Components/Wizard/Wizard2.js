import React, {Component} from 'react';
import './Wizard.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImage } from '../../ducks/reducer';


class Wizard2 extends Component {


    render() {      
        const { updateImage } = this.props;
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
                    placeholder={this.props.image}
                    onChange={e => updateImage(e.target.value)}
                    name='zipcode'
                    // value={this.state.image}
                    />


            <div className="two-btns">
                <button className="complete-btn" onClick={() => this.props.history.push("/wizard1")}>Previous Step</button>
                <button className="complete-btn" onClick={() => this.props.history.push("/wizard3")}>Next Step</button>
            </div>            



            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { image } = state;

    return {
        image,
    };
}

export default connect( mapStateToProps, {updateImage } )( Wizard2)