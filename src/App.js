import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginPostData } from "./actions";
import "./App.css";

class App extends Component {
  state = {
    email:"",
    password:""
  };
  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value });
  };

  onSubmitHandler = () => {
    const values = this.state;
  
    this.props.loginPostData(values, res => {
      if (!res.data.status) {
        alert(res.data.message);
      }
      if (res.data.status) {
        alert("Success",
        this.props.history.push("/hello", {data:res.data,header:res.headers}));
      }
    });
    // this.props.history.push("/hello", this.state);
  };
  render() {
    return (
      <div>
        <input
          name="email"
          onChange={this.onChangeHandler}
          className="form-control"
          placeholder="Enter Email"
        />
        <br />
        <input
          name="password"
          onChange={this.onChangeHandler}
          className="form-control"
          placeholder="Enter Password"
        />
        <br />
        <button
          onClick={() => this.onSubmitHandler()}
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
        <br />
        <Link to="/signup">Don't have account SignUp</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { loginData: state.data };
};

export default connect(
  mapStateToProps,
  { loginPostData }
)(App);
