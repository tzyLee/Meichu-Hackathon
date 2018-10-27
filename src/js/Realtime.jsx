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
          <Paper style = {{height : '100px', position: 'relative'}}>
            <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Power
            <span className='infoText'>{this.props.data.power}</span></div>
          </Paper> 
        </Grid>
        <Grid item > 
          <Paper style = {{height : '100px', position: 'relative'}}>
            <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Coin
            <span className='infoText'>{this.props.data.power}</span></div>
          </Paper> 
        </Grid>
        <Grid item > 
          <Paper style = {{height : '100px', position: 'relative'}}>
            <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Tree
            <span className='infoText'>{this.props.data.power}</span></div>
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