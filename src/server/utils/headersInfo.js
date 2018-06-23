import messages from './headMessages';

const getHeadersInfo = (target) => {
  switch (target) {
    case '/en/':
    case '/en':
      return {
        title: messages.en.homeTitle,
        description: messages.en.homeDescription,
        url: 'https://callisto.network/',
      }
    //Cold Staking Urls
    case '/cold-staking/':
    case '/cold-staking':
    case '/en/cold-staking':
      return {
        title: messages.en.stakingTitle,
        description: messages.en.stakingDescription,
        url: 'https://callisto.network/cold-staking/',
      }
    //Smart Contracts Urls
    case '/smart-contracts/':
    case '/smart-contracts':
    case '/en/smart-contracts':
      return {
        title: messages.en.contractsTitle,
        description: messages.en.contractsDescription,
        url: 'https://callisto.network/smart-contracts/',
      }
    case '/es/':
    case '/es':
      return {
        title: messages.es.homeTitle,
        description: messages.es.homeDescription,
        url: 'https://callisto.network/es/',
      }
    //Cold Staking Urls
    case '/es/cold-staking':
      return {
        title: messages.es.stakingTitle,
        description: messages.es.stakingDescription,
        url: 'https://callisto.network/es/cold-staking/',
      }
    //Smart Contracts Urls
    case '/es/smart-contracts':
      return {
        title: messages.es.contractsTitle,
        description: messages.es.contractsDescription,
        url: 'https://callisto.network/es/smart-contracts/',
      }
    case '/ru/':
    case '/ru':
      return {
        title: messages.ru.homeTitle,
        description: messages.ru.homeDescription,
        url: 'https://callisto.network/ru/',
      }
    //Cold Staking Urls
    case '/ru/cold-staking':
      return {
        title: messages.ru.stakingTitle,
        description: messages.ru.stakingDescription,
        url: 'https://callisto.network/ru/cold-staking/',
      }
    //Smart Contracts Urls
    case '/ru/smart-contracts':
      return {
        title: messages.ru.contractsTitle,
        description: messages.ru.contractsDescription,
        url: 'https://callisto.network/ru/smart-contracts/',
      }
    case '/id/':
    case '/id':
      return {
        title: messages.id.homeTitle,
        description: messages.id.homeDescription,
        url: 'https://callisto.network/id/',
      }
    //Cold Staking Urls
    case '/id/cold-staking':
      return {
        title: messages.id.stakingTitle,
        description: messages.id.stakingDescription,
        url: 'https://callisto.network/id/cold-staking/',
      }
    //Smart Contracts Urls
    case '/id/smart-contracts':
      return {
        title: messages.id.contractsTitle,
        description: messages.id.contractsDescription,
        url: 'https://callisto.network/id/smart-contracts/',
      }
    default:
      return {
        title: messages.en.homeTitle,
        description: messages.en.homeDescription,
        url: 'https://callisto.network/',
      }
  }
}

export default getHeadersInfo;
