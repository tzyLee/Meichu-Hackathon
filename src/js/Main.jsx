import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Logo from '../assets/logo.png';
import Realtime from './Realtime.jsx';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Past from './Past.jsx';

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
    this.setState({ value });
  };

  render() {
    return (
      <div>
         <Grid container className = 'root' spacing = {24}>
            <Grid item xs = {12}>
              <Paper style = {{height: '80px', backgroundColor: '#4d4c5f', position: 'relative'}}> 
                <Grid container justify = 'space-between'>
                  <Grid item xs>
                    <img style = {{position: 'relative', top: '20px', left: '20px', height: '50%'}} src={Logo}/>
                  </Grid>
                  <Grid item xs>
                    <BottomNavigation 
                      value = {this.state.value}
                      style = {{backgroundColor: '#4d4c62'}}
                      onChange={this.handleChange}
                      showLabels>
                      <BottomNavigationAction label="Real-Time" icon={<FavoriteIcon />} />
                      <BottomNavigationAction label="History" icon={<RestoreIcon />} />
                    </BottomNavigation>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {
              this.state.value ? (
                <Past />
              ) : (
                <Realtime data = {this.state} />         
              )
            }
         </Grid>
      </div>);
  }
}

export default Main;