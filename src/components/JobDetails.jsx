import React, { Component } from 'react';

class JobDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { dob,address, city, pincode,state,Degree,specification,passedout,Percentage,Resume,handleChange } = this.props;
        return(
            <>
            <label>
            <b><h5>Date of Birth</h5></b>
                <input 
                    type="text"
                    name="dob"
                    value={dob}
                    onChange={handleChange('dob')}
                    placeholder="dob"
                />
            </label>
                
                <b><u><h2>Contact</h2></u></b>
                <label>
                <b><h5>Address</h5></b>
                    <input 
                        type="text"
                        name="address"
                        value={address}
                        onChange={handleChange('address')}
                        placeholder="Address"
                    />
                </label>
                <label>
                <b><h5>City</h5></b>
                    <input 
                        type="text"
                        name="city"
                        value={city}
                        onChange={handleChange('city')}
                        placeholder="City"
                    />
                </label>
                <label>
                <b><h5>Pincode</h5></b>
                    <input 
                        type="text"
                        name="pincode"
                        value={pincode}
                        onChange={handleChange('pincode')}
                        placeholder="Pincode"
                    />
                </label>
                <label>
                <b><h5>State</h5></b>
                    <input 
                        type="text"
                        name="state"
                        value={state}
                        onChange={handleChange('state')}
                        placeholder="state"
                    />
                </label>

                <b><h2><u>Qualification</u></h2></b>
                <label>
                <b><h5>Degree</h5></b>
                    <input 
                        type="text"
                        name="Degree"
                        value={Degree}
                        onChange={handleChange('Degree')}
                        placeholder="Degree"
                    />
                </label>

                <label>
                <b><h5>Specification</h5></b>
                    <input 
                        type="text"
                        name="specification"
                        value={specification}
                        onChange={handleChange('specification')}
                        placeholder="specification"
                    />
                </label>

                <label>
                <b><h5>PassedOut Year</h5></b>
                    <input 
                        type="text"
                        name="passedout"
                        value={passedout}
                        onChange={handleChange('passedout')}
                        placeholder="passedout"
                    />
                </label>

                <label>
                <b><h5>Percentage/CGPA</h5></b>
                    <input 
                        type="text"
                        name="Percentage"
                        value={Percentage}
                        onChange={handleChange('Percentage')}
                        placeholder="Percentage"
                    />
                </label>

                <label>
                <b><h5>Resume/Cover</h5></b>
                    <input 
                        type="file"
                        name="Resume"
                        value={Resume}
                        onChange={handleChange('Resume')}
                        placeholder="Resume"
                    />
                </label><br></br>



                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </>
        );
    }
}

export default JobDetails;