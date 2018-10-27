import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalBarSeries, LabelSeries} from 'react-vis';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    const chartHeight= 500;
    const chartWidth = 900;
    const chartDomain = [0, chartHeight];
    return (
    <XYPlot margin={{left: 100, right: 100}} yType="ordinal" width={chartWidth} height={chartHeight} xDomain={chartDomain}>
        <YAxis/>
        <HorizontalBarSeries data={data}/>
        <LabelSeries data={data.map(obj => {
          obj.label = obj.x.toString();
          return obj;
        })} labelAnchorY="middle" labelAnchorX="text-after-edge"/>
        <line x1={100} x2={100} y1={0} y2={chartHeight}/>
    </XYPlot>
    );
  }
}

export default BarChart;