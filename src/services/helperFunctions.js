function nameFormat(symbol) {
  switch (symbol) {
    default: return symbol

    case 'BTC':
      return 'Bitcoin'
    case 'XLM':
      return 'Stellar'
    case 'BCH':
      return 'Bitcoin Cash'
    case 'ETH':
      return 'Ethereum'
    case 'LTC':
      return 'Litecoin'
    case 'EOS':
      return 'Eos'
    case 'XRP':
      return 'Ripple'

  }
}

export {
  nameFormat
}