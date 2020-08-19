import React, { Component } from "react";
import Form from '../components/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class BookingSystem extends Component {

  state = {
    selectedDate: new Date()
  };

  handleChange = date => {
    this.setState({
      selectedDate: date
    });
  };

  render(){
    return(
      <div>
      <DatePicker
        selected={this.state.selectedDate}
        onChange={this.handleChange}
        openToDate={new Date()}
        showTimeSelect
        shouldCloseOnSelect={false}
        inline
/>
      <Form date={this.state.selectedDate}/>
      </div>
    )
  }
}

export default BookingSystem
