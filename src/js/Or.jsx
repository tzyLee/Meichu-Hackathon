import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {FlexibleWidthXYPlot, XAxis, YAxis, AreaSeries} from 'react-vis';
import AverageGauge from './AverageGauge.jsx';
import orange from '../assets/orange.png'
import yellow from '../assets/yellow.png'
import table from '../assets/table.png';
import {FlexibleXYPlot, XYPlot, ArcSeries, LabelSeries} from 'react-vis';
class OR extends React.Component {
  constructor(props) {
    super(props);
    this.indoor = [{x: 1, y: 70}, {x: 2, y: 74}, {x: 3, y: 73}, {x: 4, y: 79}, {x: 5, y: 77}, {x: 6, y: 80}, {x: 7, y: 83}, {x: 8, y: 77}, {x: 9, y: 82}, {x: 10, y: 75}, {x: 11, y: 72}, {x: 12, y: 66}]
  }

  render() {
    return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'repeat(9, 1fr)', height: 'calc(98vh - 138px)', gap: '20px 20px', marginTop: '30px', marginBottom: '20px'}}>
        <Paper style = {{position: 'relative', textAlign: 'center', paddingTop: '30px', gridArea: '1/1/span 3/span 8'}}>
          <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Score </div>
          <FlexibleWidthXYPlot margin={{left: 50, right: 20}} height={150} xDomain={[1, 12]} yDomain={[66, 83]}>
            <XAxis/>
            <YAxis/>
            <AreaSeries color='#4d4c5f' data={this.indoor}/>
          </FlexibleWidthXYPlot>
        </Paper> 
        <Paper style = {{height : '100%', position: 'relative', textAlign: 'left', paddingRight: '25%', gridArea: '1/9/span 3/span 4', display: 'inline-flex'}}>
          <FlexibleXYPlot xDomain={[-5, 5]} yDomain={[-5, 5]}>
            <LabelSeries data={[{x: -0.5, y: -2, label: '11'}]} style={{fontSize: 80, stroke: '#868580'}} labelAnchorX='middle' labelAnchorY='middle'/>
            <ArcSeries className='alignCenter' radiusType={'literal'} center={{x: -0.5, y: -1.9}}
                      data={[{angle0: 0, angle: 89*2*Math.PI/100, radius0: 75, radius: 90}]} colorType={'literal'} color="9BC53D" radiusDomain={[0, 90]}/>
          </FlexibleXYPlot>
          <div style = {{position: 'absolute', top: '5px', left: '20px', fontSize: '30px'}}> Rank </div>
          <div style={{fontSize: '50px', flexFlow: 'column wrap', justifyContent: 'space-between', justifyItems: 'space-between', transform: 'translateY(18%)'}}>
            <div style = {{color: 'var(--blue)'}}>Down</div>
            <div>By</div>
            <div style = {{color: 'var(--blue)'}}>{5}</div>
          </div>
        </Paper>
      <Paper style = {{position: 'relative', gridArea: '4/1/span 3/span 5'}}>
        <img src={yellow} style={{height: '100%', width: '100%'}}/>
      </Paper>
      <Paper style = {{position: 'relative', gridArea: '7/1/span 3/span 5'}}>
        <img src={orange} style={{height: '100%', width: '100%'}}/>
      </Paper>
      <Paper style = {{height : '100%', position: 'relative', textAlign: 'center', overflow: 'scroll', gridArea: '4/6/span 6/span 7', overflowX: 'hidden'}}>
        <img src={table} style={{width: '100%'}}/>
      </Paper>
    </div>);
  }
}

export default OR;