import React from 'react';
import Paper from '@material-ui/core/Paper';

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper className='info-card' style = {this.props.style}>
        <div className='info-card__header'> {this.props.header} </div>
        <span style = {{fontSize: '20px'}}>
          {this.props.before}
          <span className={this.props.middleClass}> {this.props.middle} </span>
          {this.props.after}
        </span>
      </Paper>
    );
  }
}

InfoCard.defaultProps = {
  style: {
    height: '28%',
    width: '100%',
    paddingTop: '30px'
  },
  middleClass: 'info-card__blue-text'
}
export default InfoCard;