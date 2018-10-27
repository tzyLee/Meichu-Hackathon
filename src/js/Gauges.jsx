import React from 'react';
import Gauge from './Gauge.jsx';
import Grid from '@material-ui/core/Grid';
class Gauges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: [0, 0, 0, 0, 0]};
  }
  // for test
  componentDidMount() {
    setInterval(() => {
      if(this.state.value[0] == 100){
        this.setState({value: this.state.value.map(x => 0)});
      }
      else{
        this.setState({value: this.state.value.map(x => x + 1)});
      }
    }, 100);
  }

  render() {
    return (
      <Grid container style = {{height: '100%'}} justify="space-evenly" alignItems="center" xs={12}>
        {this.state.value.map(value => (
         <Grid style = {{textAlign: 'center'}} item xs={2}>  
            <Gauge option={Gauge.opts} value={value}></Gauge>
         </Grid>
         ))}
      </Grid>
    );
  }
}

Gauge.opts = {
  angle: 0.15, // The span of the gauge arc
  lineWidth: 0.23, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: '#000000' // Fill color
  },
  limitMax: true,     // If false, max value increases automatically if value > maxValue
  limitMin: true,     // If true, the min value of the gauge will be fixed
  colorStart: '#6FADCF',   // Colors
  colorStop: '#8FC0DA',    // just experiment with them
  strokeColor: '#E0E0E0',  // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true,     // High resolution support
  maxValue: 100,
  minValue: 0,
  animationSpeed: 32,
  value: 30,
  percentColors: [[0.0, "#E55934" ], [0.33, "#FA7921"], [0.66, "#FDE74C"], [1, "#9BC53D"]],
  generateGradient: true
};

export default Gauges;