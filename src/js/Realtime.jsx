import React from 'react';
import Gauges from './Gauges.jsx';
import BarChart from './BarChart.jsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AverageGauge from './AverageGauge.jsx';

class Realtime extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var {power} = this.props.data;
    power = Math.round(power * 100) / 100;
    var money = 1.2 * power + 1;
    money = Math.round(money * 100) / 100;
    var tree = 0.01 * power + 0.014;
    tree = Math.round(tree * 100) / 100;
    return (
    <React.Fragment>
      <Grid item xs={8}>
        <Paper style = {{height : '340px', position: 'relative', overflow: 'scroll', 'overflow-x': 'hidden'}}>
          <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Measurement </div>
          <BarChart data={this.props.data.airData['1']}></BarChart> 
        </Paper>
      </Grid>
      <Grid item container xs={4} justify="space-between" direction="column">
        <Grid item > 
          <Paper style = {{height : '100px', position: 'relative', textAlign: 'center', paddingTop: '30px'}}>
            <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Power </div>
            <span style = {{fontSize: '20px'}}>
              Saving
              <span style = {{color: '#4ac8cd', fontSize: '40px'}} > {power} </span>
              %/min.
            </span>
          </Paper> 
        </Grid>
        <Grid item > 
          <Paper style = {{height : '100px', position: 'relative', textAlign: 'center', paddingTop: '30px'}}>
            <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Coins </div>
            <span style = {{fontSize: '20px'}}>
              Saving
              <span style = {{color: '#4ac8cd', fontSize: '40px'}} > {money} </span>
              NTD/min.
            </span>
          </Paper> 
        </Grid>
        <Grid item > 
          <Paper style = {{height : '100px', position: 'relative', textAlign: 'center', paddingTop: '30px'}}>
            <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Trees </div>
            <span style = {{fontSize: '20px'}}>
              Planting
              <span style = {{color: '#4ac8cd', fontSize: '40px'}} > {tree} </span>
              trees/min.
            </span>
          </Paper> 
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Paper style = {{height: '220px', position: 'relative'}}> 
          <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Scenario Score </div>
          <Gauges data={this.props.data.score}></Gauges> 
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper style = {{height: '220px', position: 'relative'}}>
          <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Average Score </div>
          <AverageGauge value={this.props.data.average}/>
        </Paper>
      </Grid>
    </React.Fragment>);
  }
}

export default Realtime;