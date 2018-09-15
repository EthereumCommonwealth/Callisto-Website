import Basil from 'basil.js'

const Storage = () => {
  const config = {
    namespace: 'clo',
    storages: ['local', 'session'],
  }
  return new Basil(config);
}

export default Storage();
