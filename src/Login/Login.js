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
    loginAllowed : false
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
      axios.get('https://fir-login-c2e2d.firebaseio.com/Users.json')
      .then(response => {
          console.log(response.data);
        //   if(this.state.users === response.data.users){
        //       this.setState({
        //           loginAllowed: true
        //       })
        //   }

      })
  }

  login = () => {
      if(this.state.loginAllowed){
          alert('logged In the System');
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
