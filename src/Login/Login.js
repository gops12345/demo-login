import React, { Component } from 'react';
import Auxillary from '../hoc/Auxillary/Auxillary';
import FormBack from '../FormBackground/FormBackground';
import styles from '../Login/Login.module.css'
import classes from '../FormBackground/FormBackground.module.css';
class SignUp extends Component{
    render(){
        return(
            <Auxillary>
                
                <FormBack>
                  <h3 className = {classes.formTop}>Sign Up Here</h3>
                  <input type='text' placeholder = 'UserName' />
                  <input type='password' placeholder = 'Password' />
                  <button type ='submit'> Login </button>
                </FormBack>
            </Auxillary>
        );
    }
}

export default SignUp;