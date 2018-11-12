import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Logo from '../assets/logo.png';
import Realtime from './Realtime.jsx';
import Past from './Past.jsx';
import OR from './Or.jsx';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

let chartData = [
  {value: 0, x: 0, y: "CO2"},
  {value: 0, x: 0, y: "CO"},
  {value: 0, x: 0, y: "HCHO"},
  {value: 0, x: 0, y: "TVOC"},
  {value: 0, x: 0, y: "Bacteria"},
  {value: 0, x: 0, y: "Fungi"},
  {value: 0, x: 0, y: "PM10"},
  {value: 0, x: 0, y: "PM2.5"},
  {value: 0, x: 0, y: "O3"}
]
const styles = theme => ({
  tabsRoot: {
    borderBottom: '1px solid #ffffff',
    color: '#ffffff',
    fontSize: '18px'
  },
  tabsIndicator: {
    backgroundColor: '#ffffff',
    color: '#ffffff'
  },
  tabRoot: {
    '&:hover': {
      color: '#ffffff',
    },
    '&$tabSelected': {
      color: '#ffffff',
    },
    '&:focus': {
      color: '#ffffff',
    },
  },
});
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {airData: {'1': chartData}, score: [], average: 0, value: 1, power: 0};
    setInterval(() => Main.prototype.sendGetDataRequest('./data', this.updateAirData.bind(this)), 500);
    this.handleChange = this.handleChange.bind(this);
  }

  sendGetDataRequest(path, callback) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        callback(request.responseText);
      }
    }
    request.open("GET", path);
    request.send();
  }

  updateAirData(jsonString) {
    const json = JSON.parse(jsonString);
    this.setState({airData: json.air_data, score: json.score, average: json.average, power: json.power});
  }

  handleChange(e, value){
    console.log(value);
    this.setState({ value });
  };

  switchState(state) {
    switch(state.value) {
      case 0:
      return (<Realtime data={state}/>);
      case 1:
        return (<Past/>);
      case 2:
        return (<OR/>);
    }
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Paper style = {{height: '80px', backgroundColor: '#4d4c5f', position: 'relative'}}> 
          <Grid container justify = 'space-between'>
            <Grid item xs>
              <img style = {{position: 'relative', top: '10px', left: '20px', height: '90%'}} src={Logo}/>
            </Grid>
            <Grid item xs>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                fullWidth
                classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
              >
                <Tab label="Real-Time" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                <Tab label="History" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                <Tab label="Olfactory-Reality" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
              </Tabs>
            </Grid>
          </Grid>
        </Paper>
      {this.switchState(this.state)}
      </div>);
  }
}

export default withStyles(styles)(Main);