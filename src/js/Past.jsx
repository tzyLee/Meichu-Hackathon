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
        <React.Fragment>
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
    </React.Fragment>);
  }
}

export default Past;