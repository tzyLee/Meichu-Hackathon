import React from 'react';
import Grid from '@material-ui/core/Grid';
// import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Logo from '../assets/logo.png';

class OR extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <React.Fragment>
      <Grid item xs={8} style={{height: '30%'}}>
        <Paper style = {{height : '100%', position: 'relative', textAlign: 'center', paddingTop: '30px'}}>
        </Paper> 
      </Grid>
      <Grid item xs={4} style={{height: '30%'}}>
        <Paper style = {{height : '100%', position: 'relative', textAlign: 'center', paddingTop: '30px'}}>
        </Paper> 
      </Grid>
      <Grid item container xs={5} justify="space-between" direction="row" style={{height: '60%'}}>
        <Grid item style = {{height : '46%', width: '100%', position: 'relative'}}> 
          <Paper style = {{height : '100%', position: 'relative', textAlign: 'center'}}>
          </Paper> 
        </Grid>
        <Grid item style = {{height : '46%', width: '100%', position: 'relative'}}> 
          <Paper style = {{height : '100%', position: 'relative', textAlign: 'center'}}>
          </Paper> 
        </Grid>
      </Grid>
      <Grid item xs={7} style={{height: '60%'}}>
          <Paper style = {{height : '100%', position: 'relative', textAlign: 'center', paddingTop: '30px'}}>
          </Paper> 
        </Grid>
    </React.Fragment>);
  }
}

export default OR;