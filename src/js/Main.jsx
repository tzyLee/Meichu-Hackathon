import React from 'react';
import Gauges from './Gauges.jsx';
import BarChart from './BarChart.jsx';
import Grid from '@material-ui/core/Grid';
// import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Logo from '../assets/logo.png';
import AverageGauge from './AverageGauge.jsx';

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
    this.state = {airData: {'1': chartData}, score: [], average: 0};
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
    this.setState({airData: json.air_data, score: json.score, average: json.average});
    // console.log(json)
  }
  render() {
    return (
      <div>
         <Grid container className = 'root' spacing = {24}>
            <Grid item xs = {12}>
              <Paper style = {{height: '80px', backgroundColor: '#4d4c5f', position: 'relative'}}> 
                <img style = {{position: 'relative', top: '20px', left: '20px', height: '50%'}} src={Logo}/>
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper style = {{height : '340px', position: 'relative', overflow: 'scroll'}}>
                <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Measurement </div>
                <BarChart data={this.state.airData['1']}></BarChart> 
              </Paper>
            </Grid>
            <Grid item container xs={4} justify="space-between" direction="column">
              <Grid item > 
                <Paper style = {{height : '100px', position: 'relative'}}>
                  <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Energy </div>
                </Paper> 
              </Grid>
              <Grid item > 
                <Paper style = {{height : '100px', position: 'relative'}}>
                  <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Power </div>
                </Paper> 
              </Grid>
              <Grid item > 
                <Paper style = {{height : '100px', position: 'relative'}}>
                  <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Tree </div>
                </Paper> 
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Paper style = {{height: '220px', position: 'relative'}}> 
                <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Scenario Score </div>
                <Gauges data={this.state.score}></Gauges> 
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style = {{height: '220px', position: 'relative'}}>
                <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Average Score </div>
                <AverageGauge value={this.state.average}/>
              </Paper>
            </Grid>
         </Grid>
      </div>);
  }
}

export default Main;