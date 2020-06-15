import React from 'react';
import { Card, Typography, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import img from '../assets/cryptoBg.png'
import EditIcon from '@material-ui/icons/Edit';

function OneCrypto({ myCrypto, deletingCrypto, showSnackbar, openEditDialog }) {

  const useStyles = makeStyles({
    card: {
      background: 'linear-gradient(to right, #654bc4, #4620d7)',
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderRadius: 20,
      padding: '20px 30px',
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

  const symbolFormat = (symbol) => {
    return symbol.split('').map(x => (
      <p style={{ margin: 0 }} key={x} className={classes.typo}>{x}</p>
    ))
  }

  const classes = useStyles();
  const [isDeleting, setIsDeleting] = React.useState(false)


  return (

    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <Card className={classes.card} style={{ flexGrow: 1 }} >
        <div style={{ padding: 10, borderRadius: 20, backgroundColor: 'white', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
          <div style={{ background: 'linear-gradient(to right, #654bc4, #4620d7)', borderRadius: 100, height: 32 }}>
            <img src={`/white/${myCrypto.symbol.toLowerCase()}.svg`} alt="ss" />
          </div>
        </div>
        <div style={{ display: 'block', flexGrow: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant='h6' style={{ paddingRight: 3 }} className={classes.typo} >{`${myCrypto.amount}`}</Typography>
            <Typography variant='caption' className={classes.typo} >{`${myCrypto.symbol}`}</Typography>
          </div>
          <Typography style={{ textAlign: 'center' }} variant='h6' className={classes.typo} >{`${myCrypto.boughtPrice} $`}</Typography>
        </div>
        <div>
          {symbolFormat(myCrypto.symbol)}
        </div>
      </Card>
      {isDeleting ? <div style={{ paddingLeft: 10 }}><CircularProgress /></div> : <DeleteIcon onClick={() => {
        setIsDeleting(true)
        deletingCrypto(myCrypto.id).then(() => {
          setIsDeleting(false)
          showSnackbar('Deleted successfully', 'success')
        })
      }} style={{ color: 'white', paddingLeft: 15, cursor: 'pointer' }} />}
      <EditIcon onClick={() => {
        openEditDialog(myCrypto)
      }} style={{ color: 'white', paddingLeft: 15, cursor: 'pointer' }} />

    </div >
  );
}

export default OneCrypto;