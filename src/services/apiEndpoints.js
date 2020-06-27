import axios from 'axios';

const cryptoes = ['BTC', 'ETH', 'BCH', 'LTC', 'XRP']


function getCryptoes() {
  return axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptoes.join(',')}&tsyms=CAD&api_key=846a23d5388a713def6dbb8aa577f6036b88cd1c0a866dcf344348679915f911`)
    .then(res => res.data)
}

function getMonthlyPrices() {
  const promises = cryptoes.map(symbol => {

    return axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${symbol}&market=CAD&apikey=FN5ZAJQJGFO3AHG8`)
      .then(res => {
        if (res.data.Note) {
          return null
        }
        const series = res.data['Time Series (Digital Currency Monthly)'];
        return Object.keys(series).map(x => {
          const avg = ((parseFloat(series[x]['2a. high (CAD)']) + parseFloat(series[x]['3a. low (CAD)'])) / 2).toFixed(2)
          return { day: x, price: avg }
        })
      })
  })
  return Promise.all(promises).then(x => {
    const obj = {};
    cryptoes.map((y, i) => {
      obj[y] = x[i]
    })
    return obj
  })
}



export {
  getCryptoes,
  getMonthlyPrices
}