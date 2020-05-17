import React, { useState } from 'react';
import { Line } from 'react-chartjs-2'
import { Menu, MenuItem, Typography, Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { nameFormat } from '../services/helperFunctions'
import store from '../reduxStore/store'


function ChartVariations(props) {
  const generateCurrencyNumbers = () => {
    return [0, 1, 2, 3, 4, 5, 6].map(x => {
      return parseFloat((Math.random() * 40000).toFixed(2))
    })
  }
  const [currencyFlow, setCurrencyFlow] = useState(generateCurrencyNumbers())
  const [label, setLabel] = useState('Bitcoin')
  const [anchorEl, setAnchorEl] = useState(null)
  const [symbol, setSymbol] = useState(null)

  const lineGraph = () => {
    const data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: label,
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: currencyFlow
        }
      ]
    };
    return <Line data={data} width={800} height={300} options={{ maintainAspectRatio: false }} />
  }




  return (
    <div>
      <Button style={{ color: 'white', float: 'right' }} onClick={(e) => setAnchorEl(e.currentTarget)}>
        {symbol ? symbol : 'Bitcoin'}
        <ArrowDropDownIcon style={{color : 'white'}} />
      </Button>
      <Menu
        style={{ zIndex: 2000 }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => { setAnchorEl(null) }}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        elevation={4}
      >
        {Object.keys(store.getState().cryptoesPrice.cryptoes).map((x, i) => (
          <MenuItem key={i}
            onClick={(e) => {
              setSymbol(e.currentTarget.innerText);
              setAnchorEl(null);
              setLabel(nameFormat(e.currentTarget.innerText));
              setCurrencyFlow(generateCurrencyNumbers());
            }}
          >
            <Typography>{x}</Typography>
          </MenuItem>
        ))
        }
      </Menu>
      <div style={{ paddingTop: 20 }}>
        {lineGraph()}
      </div>
    </div>
  );
}

export default ChartVariations;
