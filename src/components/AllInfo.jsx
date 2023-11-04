import React, { Component } from 'react';

class AllInfo extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const { firstName, lastName,email,password,mobile,dob, address, city, pincode,state,Degree,
        specification,passedout,Percentage,Resume } = this.props;
        console.log(
            {firstName},
            {lastName},
            {email},
            {password},
            {mobile},
        
            {dob},
            {address},
            {city},
            {pincode},
            {state},
            {Degree},
            {specification},
            {passedout},
            {Percentage},
            {Resume}

        );
        return(
            <>
                <h2>Here is the information you entered:</h2>
                First Name: <b>{firstName}</b><br />
                Last Name: <b>{lastName}</b><br />
                Email : <b>{email}</b><br />
                Password: <b>{password}</b><br />
                Mobile: <b>{mobile}</b><br />
            
                dob: <b>{dob}</b><br />
                Address: <b>{address}</b><br />
                City: <b>{city}</b><br />
                Pincode: <b>{pincode}</b><br />
                state: <b>{state}</b><br />
                Degree=<b>{Degree}</b><br/>
                specification=<b>{specification}</b><br />
                passedout=<b>{passedout}</b><br/>
                Percentage=<b>{Percentage}</b><br/>
                Resume=<b>{Resume}</b><br/>

                <button className="Back" onClick={this.back}>
                    « Back
                </button>
            </>
        );
    }
}

export default AllInfo;