import React from 'react';
import Grid from '@material-ui/core/Grid';
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
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'repeat(6, 1fr)', height: 'calc(98vh - 138px)', gap: '30px 20px', marginTop: '30px', marginBottom: '20px'}}>
            <Paper style = {{position: 'relative', textAlign: 'center', paddingTop: '30px', gridColumn: '1/span 4', gridRow: '1/span 1'}}>
              <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Power </div>
              <span style = {{fontSize: '20px'}}>
                Saving
                <span style = {{color: '#4ac8cd', fontSize: '40px'}} > {power} </span>
                Watt.
              </span>
            </Paper>
            <Paper style = {{position: 'relative', textAlign: 'center', paddingTop: '30px', gridColumn: '5/span 4', gridRow: '1/span 1'}}>
              <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Money </div>
              <span style = {{fontSize: '20px'}}>
                Saving
                <span style = {{color: '#4ac8cd', fontSize: '40px'}} > {money} </span>
                NTD.
              </span>
            </Paper>
            <Paper style = {{position: 'relative', textAlign: 'center', paddingTop: '30px', gridColumn: '9/span 4', gridRow: '1/span 1'}}>
              <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Time </div>
              <span style = {{fontSize: '20px'}}>
                Turning on for
                <span style = {{color: '#4ac8cd', fontSize: '40px'}} > {time} </span>
                hrs.
              </span>
            </Paper>
            <Paper style = {{position: 'relative', paddingTop: '10px', gridColumn: '1/span 4', gridRow: '2/span 2'}}>
              <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Pollution Top1 </div>
              <div style = {{position: 'absolute', top: '5px', right: '10px', fontSize: '40px', color: '#4ac8cd'}}> PM2.5 </div>
              <AverageGauge color="#FA7921" value={37}/>
            </Paper>
            <Paper style = {{position: 'relative', paddingTop: '10px', gridColumn: '5/span 4', gridRow: '2/span 2'}}>
              <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Pollution Top2 </div>
              <div style = {{position: 'absolute', top: '5px', right: '10px', fontSize: '40px', color: '#4ac8cd'}}> PM10 </div>
              <AverageGauge color="#FA7921" value={43}/>
            </Paper>
            <Paper style = {{position: 'relative', paddingTop: '10px', gridColumn: '9/span 4', gridRow: '2/span 2'}}>
              <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Pollution Top3 </div>
              <div style = {{position: 'absolute', top: '5px', right: '10px', fontSize: '40px', color: '#4ac8cd'}}> O3 </div>
              <AverageGauge color="#FDE74C" value={51}/>
            </Paper>
            <Paper style = {{position: 'relative', paddingTop: '75px', paddingLeft: '10px', paddingRight: '10px', gridColumn: '1/span 9', gridRow: '4/span 3'}}>
              <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Air Quality Analyze </div>
              <LineChart/>
            </Paper>
            <Paper style = {{position: 'relative', textAlign: 'center', gridColumn: '10/span 3', gridRow: '4/span 3'}}>
              <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Filter </div>
              <AverageGauge color="#FDE74C" value={51}/>
              <span style = {{fontSize: '20px', position: 'relative', top: '-60px'}}> <span style = {{color: '#4ac8cd', fontSize: '40px'}}>{90}</span> days left</span>
            </Paper>
    </div>);
  }
}

export default Past;