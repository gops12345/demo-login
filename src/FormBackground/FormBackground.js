import React from 'react';
import classes from '../FormBackground/FormBackground.module.css';


const formBack = (props) =>{
    return (
        <div className = {classes.formBack}>{props.children}</div>
    );
}

export default formBack;