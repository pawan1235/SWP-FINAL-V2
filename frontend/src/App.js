import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area
} from "recharts";
import FirebaseGraph from "./FirebaseGraph";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: [],
      endpoint: "https://spw-final.appspot.com/" 
    };
  }

  componentDidMount = () => {
    const { endpoint, message } = this.state;
    const temp = message;
    const socket = socketIOClient(endpoint);
    socket.on("new-message", messageNew => {
      temp.push(messageNew);
      this.setState({ message: [...this.state.message, messageNew] });
    });
  };

  render() {
    const { message } = this.state;
    return (
      <div>
      <AreaChart
        width={900}
        height={500}
        data={message}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      <h2>Firebase Graph</h2>
      <FirebaseGraph />
      </div>
    );
  }
}

export default App;
