import React from 'react';
import Grid from '@material-ui/core/Grid';
// import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Logo from '../assets/logo.png';

class Past extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
         <Grid container className = 'root' spacing = {24}>
            <Grid item xs = {12}>
              <Paper style = {{height: '80px', backgroundColor: '#4d4c5f', position: 'relative'}}> 
                <img style = {{position: 'relative', top: '20px', left: '20px', height: '50%'}} src={Logo}/>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style = {{height : '100px', position: 'relative'}}>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style = {{height : '100px', position: 'relative'}}>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style = {{height : '100px', position: 'relative'}}>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style = {{height : '200px', position: 'relative'}}>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style = {{height : '200px', position: 'relative'}}>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper style = {{height : '200px', position: 'relative'}}>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper style = {{height: '400px', position: 'relative'}}>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style = {{height: '400px', position: 'relative'}}>
              </Paper>
            </Grid>
         </Grid>
      </div>);
  }
}

export default Past;