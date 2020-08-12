import React, { Component } from "react";

export default class Form extends Component{

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email:'',
      telephone:'',

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTelephoneChange = this.handleTelephoneChange.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({
      firstname: event.target.value
    });
  }

  handleLastNameChange(event){
    this.setState({
      lastname: event.target.value
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
    const firstname = this.state.firstname.trim();
    const lastname = this.state.lastname.trim();
    const email = this.state.email.trim();
    const telephone = this.state.telephone.trim();
    if (!firstname || !lastname || !email || !telephone){
      return;
    }

    this.props.onCommentSubmit({
      firstname: firstname,
      lastname: lastname,
      email: email,
      telephone: telephone
      });

    this.setState({
      firstname: firstname,
      lastname: lastname,
      email: email,
      telephone: telephone
    });
  }

  render(){

    return(
      <form className="showHideForm" onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.firstname} placeholder="Enter First Name" onChange={this.handleFirstNameChange}/>
      <br/>
      <br/>
      <input type="text" value={this.state.lastname}  placeholder="Enter Last Name" onChange={this.handleLastNameChange}/>
      <br/>
      <br/>
      <input type="text" value={this.state.email}  placeholder="Enter Email" onChange={this.handleEmailChange}/>
      <br/>
      <br/>
      <input type="text" value={this.state.telephone}  placeholder="Enter Last Name" onChange={this.handleTelephoneChange}/>
      <br/>
      <br/>
      <input type="submit" value="Post"/>
      </form>
    )
  }
}
