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

  sendGetDataRequest(path, callback) {
    console.log('called')
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        callback(request.responseText);
      }
    }
    request.open("GET", path);
    request.send();
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

setInterval(() => Main.prototype.sendGetDataRequest('./data', console.log), 2000);
export default Main;