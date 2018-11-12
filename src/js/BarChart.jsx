import React from 'react';
import {FlexibleWidthXYPlot, XAxis, YAxis, HorizontalBarSeries, LabelSeries, LineSeries, MarkSeries} from 'react-vis';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
  }

  getLight(data, threshold, markXOffset) {
    const markSize = 10;
    return data.map(obj => (<MarkSeries stroke='none' fill={obj.quality === 'bad' ? "#E55934" : "#9BC53D"} data={[{x: markXOffset, y: obj.y, size: markSize}]}/>));
  }

  render() {
    const data = this.props.data;
    const chartHeight= 600;
    const chartWidth = 1200;
    const chartDomain = [0, chartWidth];
    const thresholdRatio = 0.85;
    const threshold = chartWidth*thresholdRatio;
    const markXOffset = 1150;
    return (
    <FlexibleWidthXYPlot margin={{left: 100}} yType="ordinal" height = {chartHeight} xDomain={chartDomain}>
        <YAxis style={{text: {stroke: 'none', fill: '#868580'}}}/>
        <HorizontalBarSeries color='#6fc6cc' barWidth={0.5} data={data.map(obj => ({x: obj.x*chartWidth, y: obj.y}))}/>
        <LabelSeries data={data.map(obj => {
          obj.label = obj.value.toString();
          obj.x *= chartWidth;
          obj.xoffset = 3;
          return obj;
        })} labelAnchorY="middle" labelAnchorX="end"/>
        <LabelSeries data={[{x: markXOffset, y: ' ', label: 'Status'}]} labelAnchorX='middle' labelAnchorY='middle'/>
        <LineSeries color='#4d4c5f' data={[{x: threshold, y: data[0].y}, {x: threshold, y: ' '}]} strokeStyle='dashed' strokeWidth='3px'/>
        {this.getLight(data, threshold, markXOffset)}
    </FlexibleWidthXYPlot>
    );
  }
}

export default BarChart;