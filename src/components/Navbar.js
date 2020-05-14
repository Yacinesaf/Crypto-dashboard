import React, { Component } from 'react';
import { AppBar, Typography, Grid, Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AllOutIcon from '@material-ui/icons/AllOut';


class Navbar extends Component {
  render() {
    return (
        <AppBar position='static' elevation={0} color='transparent'>
          <Grid container justify='center'>
            <Grid item xs={8} style={{ paddingTop : 40, display: 'flex', alignItems: 'center' }}>
              <Typography variant='h4' style={{ color: 'white', flexGrow: 1 }}>Dashboard</Typography>
              <Button variant='outlined' color='inherit' style={{ color: 'white' }}>
                All Out
              </Button>
              <ExitToAppIcon fontSize='large' style={{ color: 'white', paddingLeft: 20 }} />
            </Grid>
          </Grid>
        </AppBar>
    );
  }
}

export default Navbar;