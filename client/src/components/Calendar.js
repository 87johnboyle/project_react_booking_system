import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Calendar extends Component {
  state = {
    selectedDate: new Date()
  };

  handleChange = date => {
    this.setState({
      selectedDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.selectedDate}
        onChange={this.handleChange}
        openToDate={new Date()}
        showTimeSelect
        shouldCloseOnSelect={false}
        inline
/>
    );
  }
}
