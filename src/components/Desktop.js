import React from 'react';
import MyCryptoes from './MyCryptoes';
import { Grid, Typography } from '@material-ui/core';
import AnalyzingField from './AnalyzingField';

function Desktop(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={4} style={{ padding: '40px 80px' }}>
          <Typography variant='h4' style={{ color: 'white', paddingBottom: 20 }}>Dashboard</Typography>
          <MyCryptoes />
        </Grid>
        <Grid item xs={8}>
          <AnalyzingField />
        </Grid>
      </Grid>
    </div>
  );
}

export default Desktop;