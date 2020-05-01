import axios from 'axios';
import firebaseApp from '../firebase';
import firebase from 'firebase/app';

function getCryptoes() {
  return axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XLM,BCH,LTC,EOS,XRP&tsyms=CAD&api_key=846a23d5388a713def6dbb8aa577f6036b88cd1c0a866dcf344348679915f911')
    .then(res => res)
}

function createNewCurrency(newCurrency) {
  let db = firebase.firestore(firebaseApp);
  let backendFormat = { ...newCurrency, time: firebase.firestore.Timestamp.fromDate(new Date()) }
  return db.collection("myWallet").add(backendFormat).then(function (doc) {
    return { ...newCurrency, id: doc.id }
  })
}

function getMyWallet() {
  let db = firebase.firestore(firebaseApp);
  return db.collection('myWallet').orderBy('time')
    .get()
    .then(function (querySnapshot) {
      let wallet = querySnapshot.docs.map(doc => {
        let obj = doc.data();
        obj['id'] = doc.id
        return obj
      })
      return wallet
    })
}

function getCryptoIcon(symbol) {
  axios.get(`https://cryptoicons.org/api/white/${symbol.toLowerCase()}/100`).then(res => {
    console.log(res);
  })
}


export {
  getCryptoes,
  createNewCurrency,
  getMyWallet,
  getCryptoIcon,
}