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
      return '危險';
    } else if(this.props.value < 50) {
      return '警告';
    } else if(this.props.value < 75) {
      return '普通';
    } else {
      return '良好';
    }
  }

  setOptions(opt) {
    this.setState({option: opt});
  }

  render() {
    return (
    <div className='Gauge'>
      <canvas ref={this.canvasRef}></canvas>
      <div id={this.name}></div>
      <div className='GaugeDescription'>{this.description()}</div>
    </div>);
  }
}

export default Gauge;