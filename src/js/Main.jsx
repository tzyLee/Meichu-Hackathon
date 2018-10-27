import React from 'react';
import Gauges from './Gauges.jsx';
import BarChart from './BarChart.jsx';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

const styles = theme => ({
   root: {
     flexGrow: 1,
   },
   paper: {
     padding: theme.spacing.unit * 2,
     textAlign: 'center',
     color: theme.palette.text.secondary,
   },
 });

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.classes = props;
  }
  render() {
    return (
      <div className = {this.classes.root}>
         <Grid container spacing={24}>
            <Grid item xs={12}>
               <Paper className={this.classes.paper}>xs=12</Paper>
            </Grid>
            <Grid item xs={6}>
               <Paper className={this.classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
               <Paper className={this.classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
               <Paper className={this.classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
               <Paper className={this.classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
               <Paper className={this.classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
               <Paper className={this.classes.paper}>xs=3</Paper>
            </Grid>
         </Grid>
      </div>);
  }
}

export default withStyles(styles)(Main);