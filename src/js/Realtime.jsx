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
    <div style = {{display: 'grid', gridTemplateColumns: 'repeat(8, 1fr) 30px repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr) 30px repeat(2, 1fr)', height: 'calc(98vh - 138px)', marginTop: '30px', marginBottom: '20px'}}>
      <Paper style = {{height : 'calc((98vh - 168px)*3/5)', position: 'relative', overflow: 'scroll', 'overflow-x': 'hidden', gridColumn: '1/span 8', gridRow: '1/span 5'}}>
        <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Measurement </div>
        <BarChart data={this.props.data.airData['1']}></BarChart> 
      </Paper>
      <span style = {{gridColumn: '10/span 3', gridRow: '1/span 3', display: 'flex', flexFlow: 'row wrap', alignContent: 'space-between'}}>
        <Paper style = {{height : '28%', width: '100%', position: 'relative', textAlign: 'center', paddingTop: '30px'}}>
          <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Power </div>
          <span style = {{fontSize: '20px'}}>
            Saving
            <span style = {{color: '#4ac8cd', fontSize: '40px'}} > {power} </span>
            %.
          </span>
        </Paper>
        <Paper style = {{height : '28%', width: '100%', position: 'relative', textAlign: 'center', paddingTop: '30px'}}>
          <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Coins </div>
          <span style = {{fontSize: '20px'}}>
            Saving
            <span style = {{color: '#4ac8cd', fontSize: '40px'}} > {money} </span>start
            NTD/min.
          </span>
        </Paper>
        <Paper style = {{height : '28%', width: '100%', position: 'relative', textAlign: 'center', paddingTop: '30px'}}>
          <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Trees </div>
          <span style = {{fontSize: '20px'}}>
            Planting
            <span style = {{color: '#4ac8cd', fontSize: '40px'}} > {tree} </span>
            trees/min.
          </span>
        </Paper>
      </span>
      <Paper style = {{position: 'relative', gridColumn: '1/span 8', gridRow: '5/span 2'}}> 
        <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Scenario Score </div>
        <Gauges data={this.props.data.score}></Gauges> 
      </Paper>
      <Paper style = {{position: 'relative', gridColumn: '-4/span 3', gridRow: '5/span 2'}}>
        <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Average Score </div>
        <AverageGauge value={this.props.data.average}/>
      </Paper>
    </div>);
  }
}

export default Realtime;