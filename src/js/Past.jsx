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
      <InfoCard style={{paddingTop: '30px', gridColumn: '1/span 4', gridRow: '1/span 1'}} header='Power' before='Saving' middle={power} after='Watt.'/>
      <InfoCard style={{paddingTop: '30px', gridColumn: '5/span 4', gridRow: '1/span 1'}} header='Money' before='Saving' middle={money} after='NTD.'/>
      <InfoCard style={{paddingTop: '30px', gridColumn: '9/span 4', gridRow: '1/span 1'}} header='Time' before='Turning on for' middle={time} after='hrs.'/>
      <InfoCard style={{paddingTop: '10px', gridColumn: '1/span 4', gridRow: '2/span 2'}} header='Pollution Top1' before='' middle='PM2.5' middleClass='info-card__blue-text info-card__upper-right-text'
      after={<AverageGauge color="#FA7921" value={37}/>}/>
      <InfoCard style={{paddingTop: '10px', gridColumn: '5/span 4', gridRow: '2/span 2'}} header='Pollution Top2' before='' middle='PM10' middleClass='info-card__blue-text info-card__upper-right-text'
      after={<AverageGauge color="#FA7921" value={43}/>}/>
      <InfoCard style={{paddingTop: '10px', gridColumn: '9/span 4', gridRow: '2/span 2'}} header='Pollution Top2' before='' middle='O3' middleClass='info-card__blue-text info-card__upper-right-text'
      after={<AverageGauge color="#FDE74C" value={51}/>}/>
      <Paper style = {{position: 'relative', paddingTop: '75px', paddingLeft: '10px', paddingRight: '10px', gridColumn: '1/span 9', gridRow: '4/span 3'}}>
        <div className='info-card__header'> Air Quality Analyze </div>
        <LineChart/>
      </Paper>
      <Paper className='info-card' style = {{gridColumn: '10/span 3', gridRow: '4/span 3'}}>
        <div className='info-card__header'> Filter </div>
        <AverageGauge color="#FDE74C" value={51}/>
        <span className='info-card__bottom-text'>
          <span className='info-card__blue-text'>{90}</span> days left
        </span>
      </Paper>
    </div>);
  }
}

export default Past;