import React from "react";
import Image from "./delete.svg";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Image className="icon" width={20} height={20} />
      </React.Fragment>
    );
  }
}
