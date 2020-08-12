import React, { Component } from "react";
import Calendar from '../components/Calendar';
import Form from '../components/Form'


class BookingSystem extends Component {

  render(){
    return(
      <div>
      <Calendar date={this.selectedDate}/>
      <Form />
      </div>
    )
  }
}

export default BookingSystem
