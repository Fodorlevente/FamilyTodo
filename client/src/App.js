import React, { Component } from "react";
import "./App.css";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <h1 className="text-center">Family Todo Application </h1>
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
