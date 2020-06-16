import axios from 'axios';

function getCryptoes() {
  return axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XLM,BCH,LTC,EOS,XRP&tsyms=CAD&api_key=846a23d5388a713def6dbb8aa577f6036b88cd1c0a866dcf344348679915f911')
    .then(res => res)
}

function getDailyPrices() {
  return axios.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CAD&apikey=FN5ZAJQJGFO3AHG8')
    .then(res => console.log(res))
}

export {
  getCryptoes,
  getDailyPrices
}