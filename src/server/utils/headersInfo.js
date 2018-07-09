import messages from './headMessages';

const getHeadersInfo = (target) => {
  switch (target) {

    //HOME URLS

    case '/en/':
    case '/en':
      return {
        title: messages.en.homeTitle,
        description: messages.en.homeDescription,
        url: 'https://callisto.network/',
      }
    case '/es/':
    case '/es':
      return {
        title: messages.es.homeTitle,
        description: messages.es.homeDescription,
        url: 'https://callisto.network/es/',
      }
    case '/ru/':
    case '/ru':
      return {
        title: messages.ru.homeTitle,
        description: messages.ru.homeDescription,
        url: 'https://callisto.network/ru/',
      }
    case '/id/':
    case '/id':
      return {
        title: messages.id.homeTitle,
        description: messages.id.homeDescription,
        url: 'https://callisto.network/id/',
      }

    // END HOME URLS

    // =================== //

    //Cold Staking Urls

    case '/cold-staking/':
    case '/cold-staking':
    case '/en/cold-staking':
    case '/en/cold-staking/':
      return {
        title: messages.en.stakingTitle,
        description: messages.en.stakingDescription,
        url: 'https://callisto.network/cold-staking/',
      }
    case '/es/cold-staking':
    case '/es/cold-staking/':
      return {
        title: messages.es.stakingTitle,
        description: messages.es.stakingDescription,
        url: 'https://callisto.network/es/cold-staking/',
      }
    case '/ru/cold-staking':
    case '/ru/cold-staking/':
      return {
        title: messages.ru.stakingTitle,
        description: messages.ru.stakingDescription,
        url: 'https://callisto.network/ru/cold-staking/',
      }
    case '/id/cold-staking':
    case '/id/cold-staking/':
      return {
        title: messages.id.stakingTitle,
        description: messages.id.stakingDescription,
        url: 'https://callisto.network/id/cold-staking/',
      }
    // END COLD STAKING URLS

    // =================== //

    // Smart Contracts Urls

    case '/smart-contracts/':
    case '/smart-contracts':
    case '/en/smart-contracts':
    case '/en/smart-contracts/':
      return {
        title: messages.en.contractsTitle,
        description: messages.en.contractsDescription,
        url: 'https://callisto.network/smart-contracts/',
      }

    case '/es/smart-contracts':
    case '/es/smart-contracts/':
      return {
        title: messages.es.contractsTitle,
        description: messages.es.contractsDescription,
        url: 'https://callisto.network/es/smart-contracts/',
      }

    case '/ru/smart-contracts':
    case '/ru/smart-contracts/':
      return {
        title: messages.ru.contractsTitle,
        description: messages.ru.contractsDescription,
        url: 'https://callisto.network/ru/smart-contracts/',
      }

    case '/id/smart-contracts':
    case '/id/smart-contracts/':
      return {
        title: messages.id.contractsTitle,
        description: messages.id.contractsDescription,
        url: 'https://callisto.network/id/smart-contracts/',
      }

    // END SMART CONTRACTS URLS

    // =================== //

    // FAQ URLS
    case '/faq/':
    case '/faq':
    case '/en/faq':
    case '/en/faq/':
      return {
        title: messages.en.contractsTitle,
        description: messages.en.contractsDescription,
        url: 'https://callisto.network/faq/',
      }

    case '/es/faq':
    case '/es/faq/':
      return {
        title: messages.es.contractsTitle,
        description: messages.es.contractsDescription,
        url: 'https://callisto.network/es/faq/',
      }

    case '/ru/faq':
    case '/ru/faq/':
      return {
        title: messages.ru.contractsTitle,
        description: messages.ru.contractsDescription,
        url: 'https://callisto.network/ru/faq/',
      }

    case '/id/faq':
    case '/id/faq/':
      return {
        title: messages.id.contractsTitle,
        description: messages.id.contractsDescription,
        url: 'https://callisto.network/id/faq/',
      }
    // END FAQ URLS

    // =================== //

    // BLOG URLS

    case '/blog/':
    case '/blog':
    case '/en/blog':
    case '/en/blog/':
      return {
        title: messages.en.contractsTitle,
        description: messages.en.contractsDescription,
        url: 'https://callisto.network/blog/',
      }

    case '/es/blog':
    case '/es/blog/':
      return {
        title: messages.es.contractsTitle,
        description: messages.es.contractsDescription,
        url: 'https://callisto.network/es/blog/',
      }

    case '/ru/blog':
    case '/ru/blog/':
      return {
        title: messages.ru.contractsTitle,
        description: messages.ru.contractsDescription,
        url: 'https://callisto.network/ru/blog/',
      }

    case '/id/blog':
    case '/id/blog/':
      return {
        title: messages.id.contractsTitle,
        description: messages.id.contractsDescription,
        url: 'https://callisto.network/id/blog/',
      }

    // END BLOG URLS

    // =================== //

    // COMMUNITY GUIDLINES

    case '/community-guidlines/':
    case '/community-guidlines':
    case '/en/community-guidlines':
    case '/en/community-guidlines/':
      return {
        title: messages.en.contractsTitle,
        description: messages.en.contractsDescription,
        url: 'https://callisto.network/community-guidlines/',
      }

    case '/es/community-guidlines':
    case '/es/community-guidlines/':
      return {
        title: messages.es.contractsTitle,
        description: messages.es.contractsDescription,
        url: 'https://callisto.network/es/community-guidlines/',
      }

    case '/ru/community-guidlines':
    case '/ru/community-guidlines/':
      return {
        title: messages.ru.contractsTitle,
        description: messages.ru.contractsDescription,
        url: 'https://callisto.network/ru/community-guidlines/',
      }

    case '/id/community-guidlines':
    case '/id/community-guidlines/':
      return {
        title: messages.id.contractsTitle,
        description: messages.id.contractsDescription,
        url: 'https://callisto.network/id/community-guidlines/',
      }

    // END COMMUNITY GUIDLINES

    // =================== //

    // FINANTIAL REPORT

    case '/finantial-report/':
    case '/finantial-report':
    case '/en/finantial-report':
    case '/en/finantial-report/':
      return {
        title: messages.en.contractsTitle,
        description: messages.en.contractsDescription,
        url: 'https://callisto.network/finantial-report/',
      }

    case '/es/finantial-report':
    case '/es/finantial-report/':
      return {
        title: messages.es.contractsTitle,
        description: messages.es.contractsDescription,
        url: 'https://callisto.network/es/finantial-report/',
      }

    case '/ru/finantial-report':
    case '/ru/finantial-report/':
      return {
        title: messages.ru.contractsTitle,
        description: messages.ru.contractsDescription,
        url: 'https://callisto.network/ru/finantial-report/',
      }

    case '/id/finantial-report':
    case '/id/finantial-report/':
      return {
        title: messages.id.contractsTitle,
        description: messages.id.contractsDescription,
        url: 'https://callisto.network/id/finantial-report/',
      }

    // END FINANTIAL REPORT

    default:
      return {
        title: messages.en.homeTitle,
        description: messages.en.homeDescription,
        url: 'https://callisto.network/',
      }
  }
}

export default getHeadersInfo;
