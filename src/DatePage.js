import React, { Component } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';

class DatePage extends Component {

  state = {
    date: new Date(),
  }

  // state = {
  //   selectedDate: moment(),
  // }

  // onSelect=(e)=>{
  //   this.setState({selectedDate:e})
  // }

  // onChange = (date) => {
  //   this.setState({ selectedDate: date });
  //   console.log((date));
  // }


  render() {
    return (
      <div>


        {/* <p> The date you've selected is: {this.state.selectedDate.format('YYYY-MM-DD')} </p> */}
        <Calendar onSelect={this.onSelect} />
        <p> The date you've selected is: {moment().format("Do MMM YY")} </p>

        
      </div>
    );
  }




}

export default DatePage;