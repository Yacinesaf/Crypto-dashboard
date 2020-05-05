import React from 'react';
import MyWallet from './MyWallet';
import { Grid } from '@material-ui/core';
import AnalyzingField from './AnalyzingField';
import Navbar from './Navbar';

function Desktop(props) {
  return (
    <Grid container justify='center' style={{ minHeight: '100vh' }}>
      <Navbar />
      <Grid item xs={11} style={{ paddingTop: 140 }}>
        <Grid container style={{ paddingBottom: 40 }}>
          <Grid item md={4} style={{ height: 'calc(100vh - 180px)' }}>
            <MyWallet />
          </Grid>
          <Grid item md={3} lg={3}>
          </Grid>
          <Grid item lg={5}>
            <Grid container justify='flex-end'>
              <Grid item xs={11}>
                <AnalyzingField />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Desktop;
