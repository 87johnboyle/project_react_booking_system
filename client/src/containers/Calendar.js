import React, { Component } from "react";
import Form from '../components/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';


class Calendar extends Component {

  state = {
    selectedDate: new Date(),
    selectedTime: new Date()
  };

  handleChange = date => {
    this.setState({
      selectedDate: date,
      selectedTime: date
    });
  };

  render(){
    return(
      <div>
      <DatePicker
        selected={this.state.selectedDate}
        onChange={this.handleChange}
        openToDate={new Date()}
        minDate={moment().toDate()}
        timeIntervals={60}
        showTimeSelect
        shouldCloseOnSelect={false}
        inline
/>
      <Form date={this.state.selectedDate} time={this.state.selectedTime}/>
      </div>
    )
  }
}

export default Calendar
