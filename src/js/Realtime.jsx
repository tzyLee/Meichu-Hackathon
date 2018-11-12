import React from 'react';
import Gauges from './Gauges.jsx';
import BarChart from './BarChart.jsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AverageGauge from './AverageGauge.jsx';
import InfoCard from './InfoCard.jsx';

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
        <div className='info-card__header'> Measurement </div>
        <BarChart data={this.props.data.airData['1']}></BarChart> 
      </Paper>
      <span style = {{gridColumn: '10/span 3', gridRow: '1/span 3', display: 'flex', flexFlow: 'row wrap', alignContent: 'space-between'}}>
        <InfoCard header='Power' before='Saving' middle={power} after='%.'/>
        <InfoCard header='Coins' before='Saving' middle={money} after='NTD/min.'/>
        <InfoCard header='Trees' before='Planting' middle={tree} after='trees/min.'/>
      </span>
      <Paper style = {{position: 'relative', gridColumn: '1/span 8', gridRow: '5/span 2'}}> 
        <div className='info-card__header'> Scenario Score </div>
        <Gauges data={this.props.data.score}></Gauges> 
      </Paper>
      <Paper style = {{position: 'relative', gridColumn: '-4/span 3', gridRow: '5/span 2'}}>
        <div className='info-card__header'> Average Score </div>
        <AverageGauge value={this.props.data.average}/>
      </Paper>
    </div>);
  }
}

export default Realtime;