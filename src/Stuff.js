import React, { Component } from "react";
import Calendar from 'react-calendar';


class Stuff extends Component {

  state = {
    date: new Date(),
  }

  //onChange = date => this.setState({ date })

  render() {
    return (
      <div class="row">
        <div class="column">
          <h2>STUFF</h2>
          <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
          <ol>
            <li>Nulla pulvinar diam</li>
            <li>Facilisis bibendum</li>
            <li>Vestibulum vulputate</li>
            <li>Eget erat</li>
            <li>Id porttitor</li>
          </ol>
        </div>
        <div class="column">
          <h2>test22</h2>
          <p>Maursapien:</p>
          <ol>
            <li>Nulla pulvinar diam</li>
            <li>Facilisis bibendum</li>
            <li>Eget erat</li>
            <li>Id porttitor</li>
          </ol>
        </div>
        <div class="column">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />

        </div>

      </div>
    );
  }

}

export default Stuff;