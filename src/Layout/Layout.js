import React from 'react';
import  classes from '../Layout/Layout.module.css';
import Auxillary from '../hoc/Auxillary/Auxillary';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const layout = (props) => {
 
    return(
        <Auxillary>
        <h1 className = {classes.layout}>Demo-Login/ Using React And Firebase</h1>
        <Login />

        <SignUp />
        </Auxillary>
    );
}

export default layout; 