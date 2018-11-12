import React from 'react';
import {FlexibleWidthXYPlot, XAxis, YAxis, AreaSeries, DiscreteColorLegend} from 'react-vis';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.outdoor = [{x: 1, y: 41}, {x: 2, y: 44}, {x: 3, y: 48}, {x: 4, y: 53}, {x: 5, y: 51}, {x: 6, y: 50}, {x: 7, y: 56}, {x: 8, y: 58}, {x: 9, y: 52}, {x: 10, y: 55}, {x: 11, y: 43}, {x: 12, y: 42}];
    this.indoor = [{x: 1, y: 55}, {x: 2, y: 59}, {x: 3, y: 58}, {x: 4, y: 64}, {x: 5, y: 62}, {x: 6, y: 65}, {x: 7, y: 68}, {x: 8, y: 62}, {x: 9, y: 67}, {x: 10, y: 60}, {x: 11, y: 57}, {x: 12, y: 51}];
  }

  render() {
    return (
      <React.Fragment>
      <FlexibleWidthXYPlot margin={{left: 50, right: 20}} height={200} xDomain={[1, 12]} yDomain={[41, 68]}>
        <XAxis />
        <YAxis/>
        <DiscreteColorLegend className='legend' style={{display: 'inline', transform: 'scale(1.5, 1.5)', top: '8%', right: '8%'}} items={[{title: 'indoor', color: '#4d4c5f', strokeWidth: 10}, {title: 'outdoor', color: '#6fc6cc', strokeWidth: 10}]}/>
        <AreaSeries color='#4d4c5f' data={this.indoor}/>
        <AreaSeries color='#6fc6cc' data={this.outdoor}/>
      </FlexibleWidthXYPlot>
      </React.Fragment>
    );
  }
}

export default LineChart;