const getHeadersInfo = (target, messages, fromBlog) => {
  switch (target) {
    //HOME URLS

    case '/en/':
    case '/en':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/',
      }
    case '/es/':
    case '/es':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/es/',
      }
    case '/ru/':
    case '/ru':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/ru/',
      }
    case '/id/':
    case '/id':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
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
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/cold-staking/',
      }
    case '/es/cold-staking':
    case '/es/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/es/cold-staking/',
      }
    case '/ru/cold-staking':
    case '/ru/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/ru/cold-staking/',
      }
    case '/id/cold-staking':
    case '/id/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
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
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/smart-contract/',
      }

    case '/es/smart-contract':
    case '/es/smart-contract/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/es/smart-contract/',
      }

    case '/ru/smart-contract':
    case '/ru/smart-contract/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/ru/smart-contract/',
      }

    case '/id/smart-contract':
    case '/id/smart-contract/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
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
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/financial-report/',
      }

    case '/es/financial-report':
    case '/es/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/es/financial-report/',
      }

    case '/ru/financial-report':
    case '/ru/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/ru/financial-report/',
      }

    case '/id/financial-report':
    case '/id/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
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
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/airdrop/',
      }

    case '/es/airdrop':
    case '/es/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/es/airdrop/',
      }

    case '/ru/airdrop':
    case '/ru/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/ru/airdrop/',
      }

    case '/id/airdrop':
    case '/id/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/id/airdrop/',
      }

    // END AIRDROP

    default:
      if (fromBlog) {
       return {
         title: messages.title,
         description: messages.description,
         image: messages.image,
         url: messages.url,
       }
      }
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/',
      }
  }
}

export default getHeadersInfo;
