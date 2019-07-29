import React, { Component } from "react";
import Auxillary from "../hoc/Auxillary/Auxillary";
import FormBack from "../FormBackground/FormBackground";
import styles from "../Login/Login.module.css";
import classes from "../FormBackground/FormBackground.module.css";
import axios from "axios";
class Login extends Component {
  // Defining a variable with userName and Password
  state = {
    users: {
      userName: "",
      password: ""
    },
    loginAllowed : false,
    checkData: null
  };

  //Gettting UserName for validation
  getUserName = event => {
    const updatedUserName = {
      ...this.state.users
    };

    updatedUserName["userName"] = event.target.value;
    this.setState({
      users: updatedUserName
    });
  };

  // fUNCTION FOR PASSWORD

  getPassword = event => {
    const updatedPassword = {
      ...this.state.users
    };

    updatedPassword["password"] = event.target.value;
    this.setState({
      users: updatedPassword
    });
  };

  componentDidMount () {
     const users = axios.get('https://fir-login-c2e2d.firebaseio.com/Users.json')
     .then(response => {
       
        const data = response.data;
        const checkDta = data.map(dta => {
          return {
            ...Array[dta]
          }
        })

        this.setState({
          checkData : checkDta
        })
     }).catch(error => console.log(error));
      console.log(this.state.checkData)
    
  }

  login = () => {
  
     this.state.loginAllowed = this.state.checkData.reduce((value, users) =>{
        if(this.state.users === users)
         value = true;
         return value;
      })

      if(this.state.loginAllowed ){
        alert('login !!!!!!!');
      }
  }

  render() {
    return (
      <Auxillary>
        <h3 className={classes.formTop}>LOGIN</h3>
        <FormBack>
          <input type="text" placeholder="UserName" className={styles.input}  onChange = {this.getUserName} />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            onChange = {this.getPassword}
          />
          <button type="submit" className={styles.button} onClick = {this.login}>
            {" "}
            LOGIN{" "}
          </button>
        </FormBack>
      </Auxillary>
    );
  }
}

export default Login;
