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
    const chartWidth = 900;
    const chartDomain = [0, chartHeight];
    const thresholdRatio = 0.7;
    const threshold = chartWidth*thresholdRatio/2;
    const markXOffset = 500;
    return (
    <FlexibleWidthXYPlot yType="ordinal" height = {chartHeight} xDomain={chartDomain}>
        <YAxis/>
        <HorizontalBarSeries color='#6fc6cc' barWidth={0.5} data={data.map(obj => ({x: obj.x*chartWidth/2, y: obj.y}))}/>
        <LabelSeries data={data.map(obj => {
          obj.label = obj.value.toString();
          obj.xOffset = 3;
          return obj;
        })} labelAnchorY="middle" labelAnchorX="text-after-edge"/>
        <LabelSeries animation data={[{x: markXOffset, y: 'Gas', label: 'Status'}]} labelAnchorX='middle' labelAnchorY='middle'/>
        <LineSeries data={[{x: threshold, y: data[0].y}, {x: threshold, y: data[data.length-1].y}]} strokeStyle='dashed' strokeWidth='3px'/>
        {this.getLight(data, threshold, markXOffset)}
    </FlexibleWidthXYPlot>
    );
  }
}

export default BarChart;