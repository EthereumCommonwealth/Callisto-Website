const prepareMarket = (btcStats, cloStats, totalSupply, balance) => {
  return {
    btcPrice: btcStats.data ? btcStats.data.data.quotes.USD.price : 0,
    cloPrice: cloStats.data ? cloStats.data.data.quotes.USD.price : 0,
    volume: cloStats.data ? cloStats.data.data.quotes.USD.volume_24h : 0,
    marketCap: cloStats.data ? cloStats.data.data.quotes.USD.market_cap : 0,
    totalSupply: totalSupply,
    stakingBalance: parseFloat(balance),
  };
};

export default prepareMarket;
