import fs from 'fs';

const getManifest = () => {
  let manifest = JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8'));
  manifest = Object.values(manifest);
  return [manifest[0], manifest[1], manifest[4]];
};

export default getManifest;
