import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area
} from "recharts";
import firebase from "./config/fbConfig";

class FirebaseGraph extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    firebase
      .database()
      .ref("database")
      .on("value", snapshot => {
        const val = snapshot.val()
        let arr = []
        Object.keys(val).map(value =>
          arr.push(val[value])
        );
        this.setState({data: arr})
      });
  }
  render() {
    const {data} = this.state
    
    return (
      <AreaChart
      width={900}
      height={500}
      data={data}
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
    );
  }
}

export default FirebaseGraph;
