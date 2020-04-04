const prepareMarket = (btcStats, cloStats, balance) => {
  return {
    btcPrice: btcStats.data ? btcStats.data.market_data.current_price.usd.toFixed(0) : 0,
    cloPrice: cloStats.data ? cloStats.data.market_data.current_price.usd : 0,
    volume: cloStats.data ? cloStats.data.market_data.total_volume.usd.toFixed(0) : 0,
    marketCap: cloStats.data ? cloStats.data.market_data.market_cap.usd.toFixed(0) : 0,
    cloUSDPrice: cloStats.data ? cloStats.data.market_data.current_price.usd : 0,
    totalSupply: cloStats.data.market_data.total_supply,
    stakingBalance: parseFloat(balance).toFixed(0),
  };
};

export default prepareMarket;
