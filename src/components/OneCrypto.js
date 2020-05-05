import React from 'react';
import { Card, Typography, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';


function OneCrypto({ myCrypto, deletingCrypto, showSnackbar }) {

  const useStyles = makeStyles({
    card: {
      backgroundColor: '#5130cf',
      borderRadius: 20,
      padding: '40px 30px',
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

    <div style={{ display : 'flex', alignItems : 'center', width : '100%' }}>
      <Card className={classes.card} style={{ flexGrow : 1}} >
        <img src={`/white/${myCrypto.symbol.toLowerCase()}.svg`} alt="ss" />
        <Typography variant='h6' className={classes.typo} style={{ padding: '0px 20px' }} >{myCrypto.amount}</Typography>
        <Typography variant='h6' className={classes.typo} style={{ flexGrow: 1 }} >{myCrypto.name}</Typography>
        <Typography variant='h6' className={classes.typo} >{`${myCrypto.boughtPrice} $`}</Typography>
      </Card>
      {isDeleting ? <CircularProgress /> : <DeleteIcon onClick={() => {
        setIsDeleting(true)
        deletingCrypto(myCrypto.id).then(() => {
          setIsDeleting(false)
          showSnackbar('Deleted successfully', 'success')
        })
      }} style={{ color: 'white', paddingLeft: 15, cursor: 'pointer' }} />}
    </div >
  );
}

export default OneCrypto;