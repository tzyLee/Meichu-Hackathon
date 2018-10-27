import React from 'react';
import Gauges from './Gauges.jsx';
import BarChart from './BarChart.jsx';

let chartData = [
  {x: 100, y: "CO2"},
  {x: 112, y: "Temp"},
  {x: 230, y: "Moisture"},
  {x: 268, y: "Apr"},
  {x: 300, y: "May"},
  {x: 310, y: "Jun"},
  {x: 315, y: "Jul"},
  {x: 340, y: "Aug"},
  {x: 388, y: "Sep"},
  {x: 404, y: "..."},
  {x: 442, y: "Nov"},
  {x: 447, y: "Dec"}
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