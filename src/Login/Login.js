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
      password: "",
      userName: ""
    },
    loginAllowed : false,
    checkData: null,
    databaseUsers : []
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

  componentDidUpdate() {
   
     const users = axios.get('https://fir-login-c2e2d.firebaseio.com/Users.json')
     .then(response => {
       
        let data = [];  
       // console.log(response.data);
        for(let key in response.data){
          data.push(response.data[key]);
        }
         
        if(this.databaseUsers != data){
        this.setState({
          databaseUsers : data
        })
      }
    //     const checkDta = data.map(dta => {
    //       return {
    //         ...Array[dta]
    //       }
    //     })

    //     this.setState({
    //       checkData : checkDta
    //     })
    //  }).catch(error => console.log(error));
    //   console.log(this.state.checkData)
     })
    
  
    
  }

  login = () => {
     console.log(this.state.databaseUsers);
     
     let allowed = 1;
     for(let key in this.state.databaseUsers){
   
     console.log(this.state.databaseUsers[key].user.userName);
     console.log(this.state.users.userName);
     console.log(this.state.databaseUsers[key].user.password);
     console.log(this.state.users.password);
       if((this.state.users.userName == this.state.databaseUsers[key].user.userName) && (this.state.users.password == this.state.databaseUsers[key].user.password)){
        alert("Login succesful")
        
        allowed = 0;
       }
       
     }

     if(allowed != 0){
      alert("Incorret username and password");
     }
  
  }

  render() {
    return (
      <Auxillary>
        <h3 className={classes.formTop}>LOGIN</h3>
        <FormBack>
          <input type="text" placeholder="UserName" className={styles.input}  onChange = {this.getUserName} />
          <input
            type="text"
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
