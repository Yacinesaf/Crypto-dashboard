import axios from 'axios';

function getCryptoes() {
  return axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XLM,BCH,LTC,EOS,XRP&tsyms=CAD&api_key=846a23d5388a713def6dbb8aa577f6036b88cd1c0a866dcf344348679915f911')
    .then(res => res)
}


export {
  getCryptoes,
}