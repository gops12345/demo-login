import React from 'react';
import  classes from '../Layout/Layout.module.css';
import Auxillary from '../hoc/Auxillary/Auxillary';
import Login from '../Login/Login';


const layout = (props) => {
 
    return(
        <Auxillary>
        <h1 className = {classes.layout}>Demo-Login</h1>
        <Login />
        </Auxillary>
    );
}

export default layout; 