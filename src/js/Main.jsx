import React from 'react';
import Gauge from './Gauge';

const opts = {
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
    minValue: 100,
    minValue: 0,
    animationSpeed: 32,
    value: 30,
    percentColors: [[0.0, "#E55934" ], [0.33, "#FA7921"], [0.66, "#FDE74C"], [1, "#9BC53D"]],
    generateGradient: true
  };

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.updateGauge = this.updateGauge.bind(this);
        this.state = {value: 32};
    }

    updateGauge(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
        <div>
            <p>Test</p>
            <Gauge option={opts} value={this.state.value}></Gauge>
            <input type="range" min="0" max="100" value={this.state} onChange={this.updateGauge} step="1"></input>
        </div>);
    }
}

export default Main;