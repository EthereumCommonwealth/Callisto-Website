import messages from '../../app/constants/messages';

const getHeadersInfo = (target) => {
  switch (target) {
    case '/en/':
    case '/en':
      return {
        title: messages.en.metaTitle,
        description: messages.en.metaDescription,
        url: 'https://callisto.network/',
      }
    case '/es/':
    case '/es':
      return {
        title: messages.es.metaTitle,
        description: messages.es.metaDescription,
        url: 'https://callisto.network/es/',
      }
    case '/ru/':
    case '/ru':
      return {
        title: messages.ru.metaTitle,
        description: messages.ru.metaDescription,
        url: 'https://callisto.network/ru/',
      }
    case '/id/':
    case '/id':
      return {
        title: messages.id.metaTitle,
        description: messages.id.metaDescription,
        url: 'https://callisto.network/id/',
      }
    default:
      return {
        title: messages.en.metaTitle,
        description: messages.en.metaDescription,
        url: 'https://callisto.network/',
      }
  }
}

export default getHeadersInfo;
