import React, { Component } from "react";
import axios from "axios"

export default class Form extends Component{

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email:'',
      telephone:''

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTelephoneChange = this.handleTelephoneChange.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  handleLastNameChange(event){
    this.setState({
      lastName: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleTelephoneChange(event) {
    this.setState({
      telephone: event.target.value
    });
  }

  handleSubmit(event) {
         event.preventDefault();
         const data = {
           firstName : this.state.firstName,
           lastName : this.state.lastName,
           email : this.state.email,
           telephone : this.state.telephone,
           selectedDate: this.props.date

           };
         axios({
           method: "post",
           url: `http://localhost:8080/bookings`,
           data: data
         })
           .then(res => {
             this.setState({
               firstName: '',
               lastName: '',
               email:'',
               telephone:''

             });
           })
           .catch(err => {
             console.log(err);
           });
       }

  render(){

    return(
      <form className="showHideForm" onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.firstName} placeholder="Enter First Name" required onChange={this.handleFirstNameChange}/>
      <br/>
      <br/>
      <input type="text" value={this.state.lastName}  placeholder="Enter Last Name" required onChange={this.handleLastNameChange}/>
      <br/>
      <br/>
      <input type="text" value={this.state.email}  placeholder="Enter Email" required onChange={this.handleEmailChange}/>
      <br/>
      <br/>
      <input type="tel" value={this.state.telephone}  placeholder="Enter Telephone" required onChange={this.handleTelephoneChange}/>
      <br/>
      <br/>
      <input type="submit" value="Post"/>
      </form>
    )
  }
}
