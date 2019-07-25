import React, { Component } from "react";
import Auxillary from "../hoc/Auxillary/Auxillary";
import FormBack from "../FormBackground/FormBackground";
import styles from "../SignUp/SignUp.module.css";
import classes from "../FormBackground/FormBackground.module.css";
import axios from "../axios-signup";
class SignUp extends Component {
  // Defining a variable with userName and Password
  state = {
    users: {
      userName: "",
      password: ""
    }
  };

  // fUNCTION FOR USERNAME

  getUserName = (event) => {
    const updatedUserName = {
      ...this.state.users
    }

    updatedUserName['userName'] = event.target.value;
    this.setState({
    users: updatedUserName
    })

  }

   // fUNCTION FOR PASSWORD

   getPassword = (event) => {

    const updatedPassword = {
      ...this.state.users
    }

    updatedPassword['password'] = event.target.value;
    this.setState({
      users: updatedPassword
    })
   }

  // Storing data to the dataBase

  storingData = () => {
    const entery = {
      user: { ...this.state.users },
     
    };

    axios
      .post("/Users.json", entery)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Auxillary>
        <h3 className={classes.formTop}>SIGN UP HERE</h3>
        <FormBack>
          <input
            type="text"
            placeholder="UserName"
            className={styles.input}
            onChange={this.getUserName}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            onChange={this.getPassword}
          />

          {console.log(this.state.users)}
          <button
            type="submit"
            className={styles.button}
            onClick={this.storingData}
          >
            {" "}
            SIGN UP{" "}
          </button>
        </FormBack>
      </Auxillary>
    );
  }
}

export default SignUp;
