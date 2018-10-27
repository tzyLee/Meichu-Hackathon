import React from 'react';
import {FlexibleXYPlot, XYPlot, ArcSeries, LabelSeries} from 'react-vis';

class AverageGauge extends React.Component {
  constructor(props) {
    super(props);
  }

  getArcData(value) {
    return [{angle0: 0, angle: value*2*Math.PI/100, radius0: 75, radius: 90}];
  }

  render() {
    return (
      <FlexibleXYPlot className='alignCenter' xDomain={[-5, 5]} yDomain={[-5, 5]}>
        <LabelSeries data={[{x: -0.5, y: -0.7, label: Math.round(this.props.value)}]} labelAnchorX='middle' labelAnchorY='middle'/>
        <ArcSeries className='alignCenter' animation radiusType={'literal'} center={{x: -0.5, y: -0.7}}
                   data={this.getArcData(this.props.value)} colorType={'literal'} radiusDomain={[0, 90]}/>
      </FlexibleXYPlot>
    );
  }
}

export default AverageGauge;