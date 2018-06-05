import coinStats from '../services/coinStats';

function getStats(id) {
  return coinStats.get(`ticker/${id}/`)
    .then((res) => res.data)
    .catch((error) => console.log('Error getting CLO Stats', error));
}

export default {
  getStats,
};
