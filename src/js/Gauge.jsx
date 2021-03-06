import React from 'react';
const GaugeJS = require('./gauge.min.js');

class Gauge extends React.Component {
  constructor(props) {
    Gauge.instanceCount = Gauge.instanceCount+1 || 0;
    super(props);
    this.state = {option: props.option};
    this.canvasRef = React.createRef();
    this.name = `Gauge${Gauge.instanceCount}`;
  }

  componentDidMount() {
    this.gauge = new GaugeJS.Gauge(this.canvasRef.current).setOptions(this.state.option);
    this.gauge.setTextField(document.getElementById(this.name));
    this.gauge.maxValue = 100;
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    this.gauge.set(this.props.value);
  }

  description() {
    if(this.props.value < 25) {
      return 'Dangerous';
    } else if(this.props.value < 50) {
      return 'Warning';
    } else if(this.props.value < 75) {
      return 'Normal';
    } else {
      return 'Good';
    }
  }

  setOptions(opt) {
    this.setState({option: opt});
  }

  render() {
    return (
    <React.Fragment>
      <span style = {{color: 'rgb(74, 200, 205)', fontSize: '20px'}}>{this.props.name}</span>
      <canvas style = {{width: "100%"}} ref={this.canvasRef}></canvas>
      <br/>
      <span id={this.name} style = {{color: 'rgb(74, 200, 205)', fontSize: '25px'}}></span>
      <br/>
      <span className='GaugeDescription'>{this.description()}</span>
    </React.Fragment>);
  }
}

export default Gauge;