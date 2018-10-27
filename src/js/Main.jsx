import React from 'react';
import Gauges from './Gauges.jsx';
import BarChart from './BarChart.jsx';
import Grid from '@material-ui/core/Grid';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';

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
      <div className = 'root'>
         <Grid container justify="center">
            <Grid className = 'header' style = {{height: '96px'}} xs = {12}>
              respira
            </Grid>
            <Grid style = {{height : '382px', overflow: 'scroll'}} item xs={8}>
              <BarChart data={chartData}></BarChart>
            </Grid>
            <Grid style = {{height : '382px', overflow: 'scroll'}} item xs={4}>
              <BarChart data={chartData}></BarChart>
            </Grid>
            <Grid className = 'dashboard' style = {{height: '242px'}} container justify="space-around" alignItems="center" item xs={12}>
              <Gauges></Gauges>
            </Grid>
         </Grid>
      </div>);
  }
}

export default Main;