import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import JobDetails from './JobDetails';
import AllInfo from './AllInfo';

export class StepForm extends Component {
    state = {
        step: 1,

        // step 1
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobile :'',


        // step 2
        dob: '',
        address: '',
        city: '',
        pincode: '',
        state:'',
        Degree:'',
        specification:'',
        passedout:'',
        Percentage:'',
        Resume:'',
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    showStep = () => {
        const { step, firstName, lastName,email,password,mobile,dob, address, city, pincode,state,
            Degree,specification,passedout,Percentage,Resume, } = this.state;

        if(step === 1)
            return (<PersonalInfo 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                firstName={firstName} 
                lastName={lastName}
                email={email}
                password={password}
                mobile={mobile}
        
            />);
        if(step === 2)
            return (<JobDetails
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                dob = {dob}
                address={address} 
                city={city}
                pincode={pincode}
                state={state}
                Degree={Degree}
                specification={specification}
                passedout={passedout}
                Percentage={Percentage}
                Resume={Resume}
            />);
        if(step === 3)
            return (<AllInfo 
                firstName={firstName} 
                lastName={lastName}
                email={email}
                password={password}
                mobile={mobile}
                dob={dob}
                address={address} 
                city={city}
                pincode={pincode}
                state={state}
                Degree={Degree}
                specification={specification}
                passedout={passedout}
                Percentage={Percentage}
                Resume={Resume}
                prevStep = {this.prevStep}
            />);
    }

    render(){
        const { step } = this.state;

        return(
            <>
                <h2>Step {step} of 3.</h2>
                {this.showStep()}
            </>
        );
    }
}

export default StepForm;