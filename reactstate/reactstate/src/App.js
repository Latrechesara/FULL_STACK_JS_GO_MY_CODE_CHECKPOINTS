import React, {Component} from "react";
import './App.css';


class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fullname: 'latreche sara',};
  }
 

 
  render() {
    return (
      <div>
        <h1>Hello, world!</h1> ;
        <h2>It is {this.state.fullname}</h2>
      </div> );
  }
}



export default Person;
