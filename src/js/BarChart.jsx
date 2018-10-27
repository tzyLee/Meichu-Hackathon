import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalBarSeries, LabelSeries, LineSeries, MarkSeries} from 'react-vis';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
  }

  determineColor(value, threshold) {
    return ;
  }

  getLight(data, threshold, markXOffset) {
    const markSize = 10;
    return data.map(obj => (<MarkSeries stroke='none' fill={obj.x > threshold ? "#E55934" : "#9BC53D"} data={[{x: markXOffset, y: obj.y, size: markSize}]}/>));
  }
  render() {
    const data = this.props.data;
    const chartHeight= 600;
    const chartWidth = 900;
    const chartDomain = [0, chartHeight];
    const threshold = 200;
    const markXOffset = 500;
    return (
    <XYPlot margin={{left: 100, right: 100}} yType="ordinal" width={chartWidth} height={chartHeight} xDomain={chartDomain}>
        <YAxis/>
        <HorizontalBarSeries data={data}/>
        <LabelSeries data={data.map(obj => {
          obj.label = obj.x.toString();
          obj.xOffset = 3;
          return obj;
        })} labelAnchorY="middle" labelAnchorX="text-after-edge"/>
        <LabelSeries animation data={[{x: markXOffset, y: 'Gas', label: 'Status'}]} labelAnchorX='middle' labelAnchorY='middle'/>
        <LineSeries data={[{x: threshold, y: data[0].y}, {x: threshold, y: data[data.length-1].y}]} strokeStyle='dashed' strokeWidth='3px'/>
        {this.getLight(data, threshold, markXOffset)}
    </XYPlot>
    );
  }
}

export default BarChart;