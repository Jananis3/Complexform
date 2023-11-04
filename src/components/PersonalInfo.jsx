
import React, { Component } from 'react';

class PersonalInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { firstName, lastName,email,password,mobile, handleChange } = this.props;
        return(
            <>
            <div class="description">
	<div class="col-lg-12 col-md-12 col-sm-12">
	<h2>Job Description: </h2>
	<h3>
		<ol>Design and develop high-volume, low-latency applications<br></br>
             for mission-critical systems, delivering high-availability <br></br>
             and performance. </ol>
		<ul>Contribute in all phases of the product development lifecycle. </ul>
		<ul>Write well designed, testable, efficient code. </ul>
		<ol>Ensure designs are in compliance with specifications.</ol>
		<ol>Prepare and produce releases of software components.</ol>
		<ol>Support continuous improvement by investigating alternatives and <br></br>
        technologies and presenting these for architectural review.</ol>
	</h3>
</div></div>
                <u><h1>personal Details</h1></u>
                <label>
                    <b><h5>FirstName</h5></b>
                    <input 
                        
                        type="text"
                        name="firstName"
                        value={firstName}
                        placeholder="First Name"
                        onChange={handleChange('firstName')}
                    />
                </label>
                <label>
               <b><h5>LastName</h5></b>
                    <input 
                        type="text"
                        name="lastName"
                        value={lastName}
                        placeholder="Last Name"
                        onChange={handleChange('lastName')}
                    />
                </label>
                <label>
                <b><h5>Email Id</h5></b>
                    <input 
                        type="text"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={handleChange('email')}
                    />
                </label>
                <label>
                <b><h5>Password</h5></b>
                    <input 
                        type="text"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={handleChange('password')}
                    />
                </label>
                <label>
                <b><h5>Phone No</h5></b>
                    <input 
                        type="text"
                        name="mobile"
                        value={mobile}
                        placeholder="Mobile Number"
                        onChange={handleChange('mobile')}
                    />
                </label>

            
                <button className="Reset" onClick={this.reset}>
                   <b>Reset</b>
                </button>

                <button className="Next" onClick={this.continue}>
                   <b>Next</b>
                </button>
            </>
        );
    }
}

export default PersonalInfo;