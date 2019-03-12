import fs from 'fs';

const getManifest = () => {
  let manifest = JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8'));
  manifest = Object.values(manifest);
  return [manifest[6], manifest[7], manifest[8]];
};

export default getManifest;
