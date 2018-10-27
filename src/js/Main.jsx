import React from 'react';
import Gauges from './Gauges.jsx';
import BarChart from './BarChart.jsx';

let chartData = [
  {value: 0, x: 0, y: "CO2"},
  {value: 0, x: 0, y: "CO"},
  {value: 0, x: 0, y: "HCHO"},
  {value: 0, x: 0, y: "TVOC"},
  {value: 0, x: 0, y: "Bacteria"},
  {value: 0, x: 0, y: "Fungi"},
  {value: 0, x: 0, y: "PM10"},
  {value: 0, x: 0, y: "PM2.5"},
  {value: 0, x: 0, y: "O3"}
]

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {airData: {'1': chartData}, score: []};
    setInterval(() => Main.prototype.sendGetDataRequest('./data', this.updateAirData.bind(this)), 500);
  }

  sendGetDataRequest(path, callback) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        callback(request.responseText);
      }
    }
    request.open("GET", path);
    request.send();
  }

  updateAirData(jsonString) {
    const json = JSON.parse(jsonString);
    this.setState({airData: json.air_data, score: json.score});
    // console.log(json)
  }

  render() {
    return (
      <div>
        <p>Test</p>
        <Gauges data={this.state.score}></Gauges>
        <BarChart data={this.state.airData['1']}></BarChart>
      </div>);
  }
}

export default Main;