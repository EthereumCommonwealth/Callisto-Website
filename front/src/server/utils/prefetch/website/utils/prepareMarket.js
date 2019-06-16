const prepareMarket = (btcStats, cloStats, totalSupply, balance) => {
  return {
    btcPrice: btcStats.data ? btcStats.data.data.quotes.USD.price.toFixed(0) : 0,
    cloPrice: cloStats.data ? cloStats.data.data.quotes.USD.price : 0,
    volume: cloStats.data ? cloStats.data.data.quotes.USD.volume_24h.toFixed(0) : 0,
    marketCap: cloStats.data ? cloStats.data.data.quotes.USD.market_cap.toFixed(0) : 0,
    cloUSDPrice: cloStats.data ? cloStats.data.data.quotes.USD.price : 0,
    totalSupply: totalSupply,
    stakingBalance: parseFloat(balance).toFixed(0),
  };
};

export default prepareMarket;
