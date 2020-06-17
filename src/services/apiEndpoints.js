import axios from 'axios';

function getCryptoes() {
  return axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BCH,LTC,XRP&tsyms=CAD&api_key=846a23d5388a713def6dbb8aa577f6036b88cd1c0a866dcf344348679915f911')
    .then(res => res)
}

function getDailyPrices(cryptoes) {
  cryptoes.map(symbol => {
    return axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${symbol}&market=CAD&apikey=FN5ZAJQJGFO3AHG8`)
      .then(res => res)
  })
}

export {
  getCryptoes,
  getDailyPrices
}