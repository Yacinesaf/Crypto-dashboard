import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import emptystate from '../assets/emptystate.svg'
import { makeStyles } from '@material-ui/core/styles';

function AnalyzingField(props) {
  const useStyles = makeStyles({
    typo: {
      color: 'white',
      paddingRight: 20
    },
    div: {
      display: 'flex',
    }

  })

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.div} style={{ backgroundColor: '#24204b', borderRadius: 20, padding: 60, alignItems: 'center' }}>
        {/*<img src={emptystate} alt='empty' height='200px' width='200px' />*/}
        <div style={{ flexGrow: 1 }}>
          <div className={classes.div} >
            <Typography className={classes.typo} style={{ color: 'white' }}>Gross</Typography>
            <Typography style={{ color: 'white' }}>1440$</Typography>
          </div>
          <div className={classes.div} >
            <Typography className={classes.typo} style={{ color: 'white' }}>Buying fees</Typography>
            <Typography style={{ color: 'white' }}>14220$</Typography>
          </div>
          <div className={classes.div} >
            <Typography className={classes.typo} style={{ color: 'white' }}>Selling fees</Typography>
            <Typography style={{ color: 'white' }}>14430$</Typography>
          </div>
        </div>
        <div style={{ height: 150, width: 150, border: '5px solid #f44336', borderRadius: 150, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='h4' style={{ color: '#f44336', }}>24 %</Typography>
        </div>
      </Paper>
    </div>
  );
}

export default AnalyzingField;