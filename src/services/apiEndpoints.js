import axios from 'axios'
import firebaseApp from 'firebase'
import firebase from 'firebase/app'


function getPrices() {
  return axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD&api_key=846a23d5388a713def6dbb8aa577f6036b88cd1c0a866dcf344348679915f911')
    .then(res => (console.log(res)))
}

function createNewCurrency(newCurrency) {
  let db = firebase.firestore(firebaseApp);
  let backendFormat = { ...newCurrency, time: firebase.firestore.Timestamp.fromDate(new Date()) }
  return db.collection("Currencies").add(backendFormat).then(function (doc) {
    return { ...newCurrency, id: doc.id }
  })
}


export {
  getPrices,
  createNewCurrency
}