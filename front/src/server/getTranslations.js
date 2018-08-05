import fs from 'fs';

const getTranslations = (lang) => {
  return JSON.parse(fs.readFileSync(`${__dirname}/public/translations/${lang ? lang : 'en'}_translations.json`, 'utf8'));
}

export default getTranslations;
