import React from 'react';
import Grid from '@material-ui/core/Grid';
// import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Logo from '../assets/logo.png';
import {FlexibleWidthXYPlot, XAxis, YAxis, AreaSeries} from 'react-vis';
import AverageGauge from './AverageGauge.jsx';

class OR extends React.Component {
  constructor(props) {
    super(props);
    this.indoor = [{x: 1, y: 70}, {x: 2, y: 74}, {x: 3, y: 73}, {x: 4, y: 79}, {x: 5, y: 77}, {x: 6, y: 80}, {x: 7, y: 83}, {x: 8, y: 77}, {x: 9, y: 82}, {x: 10, y: 75}, {x: 11, y: 72}, {x: 12, y: 66}]
  }

  render() {
    return (
    <React.Fragment>
      <Grid item xs={8} style={{height: '30%'}}>
        <Paper style = {{height : '100%', position: 'relative', textAlign: 'center', paddingTop: '30px'}}>
          <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Score </div>
          <FlexibleWidthXYPlot margin={{left: 50, right: 20}} height={220} xDomain={[1, 12]} yDomain={[66, 83]}>
            <XAxis/>
            <YAxis/>
            <AreaSeries color='#4d4c5f' data={this.indoor}/>
          </FlexibleWidthXYPlot>
        </Paper> 
      </Grid>
      <Grid item xs={4} style={{height: '30%'}}>
        <Paper style = {{height : '100%', position: 'relative', textAlign: 'left', paddingRight: '50%', paddingTop: '30px'}}>
        <AverageGauge color="#9BC53D" value={11}/>
        <div>Rank</div>
        <table>
          <tr><div style = {{color: '#4ac8cd', fontSize: '40px'}}>Down</div></tr>
          <tr><div style = {{fontSize: '20px', position: 'relative', top: '-80px', left: '170px'}}>By</div></tr>
          <tr><div style = {{color: '#4ac8cd', fontSize: '40px'}}>{5}</div></tr>
        </table>
        
        
        
        </Paper> 
      </Grid>
      <Grid item container xs={5} justify="space-between" direction="row" style={{height: '60%'}}>
        <Grid item style = {{height : '46%', width: '100%', position: 'relative'}}> 
          <Paper style = {{height : '100%', position: 'relative', textAlign: 'center'}}>
          </Paper> 
        </Grid>
        <Grid item style = {{height : '46%', width: '100%', position: 'relative'}}> 
          <Paper style = {{height : '100%', position: 'relative', textAlign: 'center'}}>
          </Paper> 
        </Grid>
      </Grid>
      <Grid item xs={7} style={{height: '60%'}}>
          <Paper style = {{height : '100%', position: 'relative', textAlign: 'center', paddingTop: '30px'}}>
          </Paper> 
        </Grid>
    </React.Fragment>);
  }
}

export default OR;