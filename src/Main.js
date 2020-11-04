import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import DatePage from "./DatePage";

 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/stuff">Stuff</NavLink></li>
            <li><NavLink exact to="/contact">Contact</NavLink></li>
            <li><NavLink exact to="/calendar">Calendar</NavLink></li>

          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/stuff" component={Stuff}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/calendar" component={DatePage}/>

             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;