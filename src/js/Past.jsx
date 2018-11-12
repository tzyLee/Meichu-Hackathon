import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LineChart from './LineChart.jsx';
import Logo from '../assets/logo.png';
import AverageGauge from './AverageGauge.jsx';
import InfoCard from './InfoCard.jsx';

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
          <InfoCard style={{gridColumn: '1/span 4', gridRow: '1/span 1'}} header='Power' before='Saving' middle={power} after='Watt.'/>
          <InfoCard style={{gridColumn: '5/span 4', gridRow: '1/span 1'}} header='Money' before='Saving' middle={money} after='NTD.'/>
          <InfoCard style={{gridColumn: '9/span 4', gridRow: '1/span 1'}} header='Time' before='Turning on for' middle={time} after='hrs.'/>
            <Paper className='info-card' style = {{gridColumn: '1/span 4', gridRow: '2/span 2'}}>
              <div className='info-card__header'> Pollution Top1 </div>
              <div className='info-card__blue-text' style = {{position: 'absolute', top: '5px', right: '10px'}}> PM2.5 </div>
              <AverageGauge color="#FA7921" value={37}/>
            </Paper>
            <Paper className='info-card' style = {{gridColumn: '5/span 4', gridRow: '2/span 2'}}>
              <div className='info-card__header'> Pollution Top2 </div>
              <div className='info-card__blue-text' style = {{position: 'absolute', top: '5px', right: '10px'}}> PM10 </div>
              <AverageGauge color="#FA7921" value={43}/>
            </Paper>
            <Paper className='info-card' style = {{gridColumn: '9/span 4', gridRow: '2/span 2'}}>
              <div className='info-card__header'> Pollution Top3 </div>
              <div className='info-card__blue-text' style = {{position: 'absolute', top: '5px', right: '10px'}}> O3 </div>
              <AverageGauge color="#FDE74C" value={51}/>
            </Paper>
            <Paper style = {{position: 'relative', paddingTop: '75px', paddingLeft: '10px', paddingRight: '10px', gridColumn: '1/span 9', gridRow: '4/span 3'}}>
              <div className='info-card__header'> Air Quality Analyze </div>
              <LineChart/>
            </Paper>
            <Paper style = {{position: 'relative', textAlign: 'center', gridColumn: '10/span 3', gridRow: '4/span 3'}}>
              <div className='info-card__header'> Filter </div>
              <AverageGauge color="#FDE74C" value={51}/>
              <span style = {{fontSize: '20px', position: 'relative', top: '-60px'}}>
                <span className='info-card__blue-text'>{90}</span> days left
              </span>
            </Paper>
    </div>);
  }
}

export default Past;