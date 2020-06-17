import React from 'react';
import { Card, Typography, CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import img from '../assets/cryptoBg.png'
import EditIcon from '@material-ui/icons/Edit';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function OneCrypto({ myCrypto, removeCrypto, showSnackbar, openEditDialog }) {
  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  const useStyles = makeStyles({
    card: {
      background: 'linear-gradient(to right, #654bc4, #4620d7)',
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderRadius: xsOnly ? 15 : 20,
      padding: xsOnly ? '15px 25px' : '20px 30px',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      display: 'flex',
      alignItems: 'center',
    },
    typo: {
      color: 'white',
    },
    iconBg: {
      backgroundColor: '#6f4bf8',
    }
  });



  const classes = useStyles();
  const [isDeleting, setIsDeleting] = React.useState(false)


  return (

    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <Card className={classes.card} style={{ flexGrow: 1 }} >
        <Grid justify='space-between' container>
          <Grid item style={{display: 'flex', alignItems : 'center'}}>
            <div style={{ padding: 10, borderRadius: 20, backgroundColor: 'white', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
              <div style={{ background: 'linear-gradient(to right, #654bc4, #4620d7)', borderRadius: 100, height: xsOnly ? 18 : 32 }}>
                <img src={`/white/${myCrypto.symbol.toLowerCase()}.svg`} alt="ss" height={xsOnly ? 18 : 32} />
              </div>
            </div>
          </Grid>
          {xsOnly ? null : <Grid item style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant={xsOnly ? 'body1' : 'h6'} style={{ fontWeight: 550, textAlign: 'center' }} className={classes.typo}>{myCrypto.name}</Typography>
          </Grid>}

          <Grid item>
            <div style={{ display: 'flex', alignItems: 'center', textAlign: 'right' }}>
              <Typography variant={xsOnly ? 'body1' : 'h5'} style={{ paddingRight: 3, fontWeight: 600 }} className={classes.typo} >{`${myCrypto.amount}`}</Typography>
              <Typography variant='body1' style={{ fontWeight: 600 }} className={classes.typo} >{`${myCrypto.symbol}`}</Typography>
            </div>
            <Typography variant='body1' style={{ textAlign: 'right' }} className={classes.typo} >{`$${myCrypto.boughtPrice}`}</Typography>
          </Grid>
        </Grid>
      </Card>
      <div style={{ display: xsOnly ? 'block' : 'flex', alignItems: 'center' }}>
        <EditIcon fontSize={xsOnly ? 'small' : 'default'} onClick={() => {
          openEditDialog(myCrypto)
        }} style={{ color: 'white', paddingLeft: 15, cursor: 'pointer', display: 'block' }} />
        {isDeleting ? <div style={{ paddingLeft: 10 }}><CircularProgress /></div> : <DeleteIcon fontSize={xsOnly ? 'small' : 'default'} onClick={() => {
          setIsDeleting(true)
          removeCrypto(myCrypto.symbol)
          setIsDeleting(false)
          showSnackbar('Deleted successfully', 'success')
        }} style={{ color: 'white', paddingLeft: 15, cursor: 'pointer', display: 'block', paddingTop : xsOnly ? 10 : 0 }} />}

      </div>
    </div >
  );
}

export default OneCrypto;