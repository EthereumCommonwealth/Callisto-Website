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

    case '/smart-contract/':
    case '/smart-contract':
    case '/en/smart-contract':
    case '/en/smart-contract/':
      return {
        title: messages.en.contractsTitle,
        description: messages.en.contractsDescription,
        url: 'https://callisto.network/smart-contract/',
      }

    case '/es/smart-contract':
    case '/es/smart-contract/':
      return {
        title: messages.es.contractsTitle,
        description: messages.es.contractsDescription,
        url: 'https://callisto.network/es/smart-contract/',
      }

    case '/ru/smart-contract':
    case '/ru/smart-contract/':
      return {
        title: messages.ru.contractsTitle,
        description: messages.ru.contractsDescription,
        url: 'https://callisto.network/ru/smart-contract/',
      }

    case '/id/smart-contract':
    case '/id/smart-contract/':
      return {
        title: messages.id.contractsTitle,
        description: messages.id.contractsDescription,
        url: 'https://callisto.network/id/smart-contract/',
      }

    // END SMART CONTRACTS URLS

    // =================== //

    // FINANTIAL REPORT

    case '/financial-report/':
    case '/financial-report':
    case '/en/financial-report':
    case '/en/financial-report/':
      return {
        title: messages.en.financialTitle,
        description: messages.en.financialDescription,
        url: 'https://callisto.network/financial-report/',
      }

    case '/es/financial-report':
    case '/es/financial-report/':
      return {
        title: messages.es.financialTitle,
        description: messages.es.financialDescription,
        url: 'https://callisto.network/es/financial-report/',
      }

    case '/ru/financial-report':
    case '/ru/financial-report/':
      return {
        title: messages.ru.financialTitle,
        description: messages.ru.financialDescription,
        url: 'https://callisto.network/ru/financial-report/',
      }

    case '/id/financial-report':
    case '/id/financial-report/':
      return {
        title: messages.id.financialTitle,
        description: messages.id.financialDescription,
        url: 'https://callisto.network/id/financial-report/',
      }

    // END FINANTIAL REPORT

    // =================== //

    // AIRDROP

    case '/airdrop/':
    case '/airdrop':
    case '/en/airdrop':
    case '/en/airdrop/':
      return {
        title: messages.en.airdropTitle,
        description: messages.en.airdropDescription,
        url: 'https://callisto.network/airdrop/',
      }

    case '/es/airdrop':
    case '/es/airdrop/':
      return {
        title: messages.es.airdropTitle,
        description: messages.es.airdropDescription,
        url: 'https://callisto.network/es/airdrop/',
      }

    case '/ru/airdrop':
    case '/ru/airdrop/':
      return {
        title: messages.ru.airdropTitle,
        description: messages.ru.airdropDescription,
        url: 'https://callisto.network/ru/airdrop/',
      }

    case '/id/airdrop':
    case '/id/airdrop/':
      return {
        title: messages.id.airdropTitle,
        description: messages.id.airdropTitle,
        url: 'https://callisto.network/id/airdrop/',
      }

    // END AIRDROP

    default:
      return {
        title: messages.en.homeTitle,
        description: messages.en.homeDescription,
        url: 'https://callisto.network/',
      }
  }
}

export default getHeadersInfo;
