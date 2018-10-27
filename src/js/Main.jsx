import React from 'react';
import Gauges from './Gauges.jsx';
import BarChart from './BarChart.jsx';
import Grid from '@material-ui/core/Grid';
// import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
         <Grid container className = 'root' spacing = {24}>
            <Grid item xs = {12}>
              <Paper style = {{height: '80px', backgroundColor: '#4d4c5f'}}> respira </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style = {{height : '360px', overflow: 'scroll'}}> <BarChart data={chartData}></BarChart> </Paper>
            </Grid>
            <Grid item container xs={6} justify="space-between" direction="column">
              <Grid item > <Paper style = {{height : '100px'}}> 123 </Paper> </Grid>
              <Grid item > <Paper style = {{height : '100px'}}> 123 </Paper> </Grid>
              <Grid item > <Paper style = {{height : '100px'}}> 123 </Paper> </Grid>
            </Grid>
            <Grid item xs={9}>
              <Paper style = {{height: '200px'}}> <Gauges></Gauges> </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style = {{height: '200px'}}> 123 </Paper>
            </Grid>
         </Grid>
      </div>);
  }
}

export default Main;