import React from 'react';
import {FlexibleWidthXYPlot, XAxis, YAxis, HorizontalBarSeries, LabelSeries} from 'react-vis';
// import {} from 'react-vis';
class BarChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    const chartHeight= 500;
    // const chartWidth = 900;
    const chartDomain = [0, chartHeight];
    return (
    <FlexibleWidthXYPlot yType="ordinal" height = {chartHeight} xDomain={chartDomain}>
        <YAxis/>
        <HorizontalBarSeries color='#6fc6cc' barWidth={0.5} data={data}/>
        <LabelSeries data={data.map(obj => {
          obj.label = obj.x.toString();
          return obj;
        })} labelAnchorY="middle" labelAnchorX="text-after-edge"/>
    </FlexibleWidthXYPlot>
    );
  }
}

export default BarChart;