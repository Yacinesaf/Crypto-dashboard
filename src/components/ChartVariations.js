import React, { useState } from 'react';
import { Line } from 'react-chartjs-2'
import { InputAdornment, Input, Menu, MenuItem, Typography } from '@material-ui/core';
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
      <form onClick={(e) => setAnchorEl(e.currentTarget)} style={{ width: 'fit-content' }}>
        <Input endAdornment={<InputAdornment position="end"><ArrowDropDownIcon /></InputAdornment>} value={symbol ? symbol : 'Crypto'} inputProps={{ 'aria-label': 'description', readOnly: true }} />
      </form>
      <Menu
        style={{ zIndex: 2000 }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={(e) => { setAnchorEl(null) }}
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
            style={{ width: 214 }}
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
      {lineGraph()}
    </div>
  );
}

export default ChartVariations;
