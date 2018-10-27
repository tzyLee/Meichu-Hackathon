import React from 'react';
import Gauges from './Gauges.jsx';
import BarChart from './BarChart.jsx';

let chartData = [
  {x: 100, y: "CO2"},
  {x: 112, y: "CO"},
  {x: 230, y: "HCHO"},
  {x: 268, y: "TVOC"},
  {x: 300, y: "Bacteria"},
  {x: 310, y: "Fungi"},
  {x: 315, y: "PM10"},
  {x: 340, y: "PM2.5"},
  {x: 388, y: "O3"}
]

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Test</p>
        <Gauges></Gauges>
        <BarChart data={chartData}></BarChart>
      </div>);
  }
}

export default Main;