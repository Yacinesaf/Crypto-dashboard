import React from 'react';
import MyCryptoes from './MyCryptoes';
import { Grid, Typography } from '@material-ui/core';
import AnalyzingField from './AnalyzingField';

function Desktop(props) {
  return (
    <div>
      <Grid container style={{ padding: '40px 80px' }}>
        <Grid item xs={4}  >
          <Typography variant='h4' style={{ color: 'white', paddingBottom: 20 }}>Dashboard</Typography>
          <MyCryptoes />
        </Grid>
        <Grid item xs={8} style={{paddingTop : 61}}>
          <Grid container justify='flex-end'>
            <Grid item xs={11}>
              <AnalyzingField />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Desktop;