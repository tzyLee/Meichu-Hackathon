import React from 'react';
import Grid from '@material-ui/core/Grid';
// import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LineChart from './LineChart.jsx';
import Logo from '../assets/logo.png';
import AverageGauge from './AverageGauge.jsx';

class Past extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var power = 15000;
    var money = 1.2 * power + 1;
    money = Math.round(money * 100) / 100;
    var time = 185;
    return (
        <React.Fragment>
            <Grid item xs={4}>
              <Paper style = {{height : '100px', position: 'relative', textAlign: 'center', paddingTop: '30px'}}>
                <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Power </div>
                <span style = {{fontSize: '20px'}}>
                  Saving
                  <span style = {{color: '#4ac8cd', fontSize: '40px'}} > {power} </span>
                  Watt.
                </span>
              </Paper> 
            </Grid>
            <Grid item xs={4}>
              <Paper style = {{height : '100px', position: 'relative', textAlign: 'center', paddingTop: '30px'}}>
                <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Money </div>
                <span style = {{fontSize: '20px'}}>
                  Saving
                  <span style = {{color: '#4ac8cd', fontSize: '40px'}} > {money} </span>
                  NTD.
                </span>
              </Paper> 
            </Grid>
            <Grid item xs={4}>
              <Paper style = {{height : '100px', position: 'relative', textAlign: 'center', paddingTop: '30px'}}>
                <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Time </div>
                <span style = {{fontSize: '20px'}}>
                  Turning on for
                  <span style = {{color: '#4ac8cd', fontSize: '40px'}} > {time} </span>
                  hrs.
                </span>
              </Paper> 
            </Grid>
            <Grid item xs={4}>
              <Paper style = {{height : '200px', position: 'relative'}}>
                <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Pollution Top1 </div>
                <div style = {{position: 'absolute', top: '5px', right: '10px', fontSize: '40px', color: '#4ac8cd'}}> PM2.5 </div>
                <AverageGauge color="#FA7921" value={37}/>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style = {{height : '200px', position: 'relative'}}>
                <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Pollution Top2 </div>
                <div style = {{position: 'absolute', top: '5px', right: '10px', fontSize: '40px', color: '#4ac8cd'}}> PM10 </div>
                <AverageGauge color="#FA7921" value={43}/>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style = {{height : '200px', position: 'relative'}}>
                <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Pollution Top3 </div>
                <div style = {{position: 'absolute', top: '5px', right: '10px', fontSize: '40px', color: '#4ac8cd'}}> O3 </div>
                <AverageGauge color="#FDE74C" value={51}/>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper style = {{height: '400px', position: 'relative'}}>
              <LineChart/>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style = {{height: '400px', position: 'relative'}}>
              <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Filter </div>
              <AverageGauge color="#FDE74C" value={51}/>
              <span style = {{fontSize: '20px', position: 'relative', top: '-80px', left: '170px'}}> <span style = {{color: '#4ac8cd', fontSize: '40px'}}>{90}</span> days left</span>
              </Paper>
            </Grid>
    </React.Fragment>);
  }
}

export default Past;