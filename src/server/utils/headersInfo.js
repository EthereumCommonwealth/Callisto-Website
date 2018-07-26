const getHeadersInfo = (target, messages, fromBlog) => {
  switch (target) {
    //HOME URLS
    case '/en/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/',
      }
    case '/es/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/es/',
      }
    case '/ru/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/ru/',
      }
    case '/id/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/id/',
      }
    case '/de/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/de/',
      }
    case '/zh/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/zh/',
      }
    case '/it/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/it/',
      }
    case '/ko/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/ko/',
      }
    case '/tr/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/tr/',
      }
    case '/vi/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/vi/',
      }
    // END HOME URLS

    // =================== //

    //Cold Staking Urls

    case '/cold-staking/':
    case '/en/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/cold-staking/',
      }
    case '/es/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/es/cold-staking/',
      }
    case '/ru/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/ru/cold-staking/',
      }
    case '/id/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/id/cold-staking/',
      }
    case '/de/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/de/cold-staking/',
      }
    case '/zh/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/zh/cold-staking/',
      }
    case '/it/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/it/cold-staking/',
      }
    case '/ko/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/ko/cold-staking/',
      }
    case '/tr/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/tr/cold-staking/',
      }
    case '/vi/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/vi/cold-staking/',
      }
    // END COLD STAKING URLS

    // =================== //

    // Smart Contracts Urls

    case '/smart-contract/':
    case '/en/smart-contract/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/smart-contract/',
      }
    case '/es/smart-contract/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/es/smart-contract/',
      }
    case '/ru/smart-contract/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/ru/smart-contract/',
      }
    case '/id/smart-contract/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/id/smart-contract/',
      }
    case '/de/smart-contract/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/de/smart-contract/',
      }
    case '/zh/smart-contract/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/zh/smart-contract/',
      }
    case '/it/smart-contract/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/it/smart-contract/',
      }
    case '/ko/smart-contract/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/ko/smart-contract/',
      }
    case '/tr/smart-contract/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/tr/smart-contract/',
      }
    case '/vi/smart-contract/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/vi/smart-contract/',
      }

    // END SMART CONTRACTS URLS

    // =================== //

    // FINANTIAL REPORT

    case '/financial-report/':
    case '/en/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/financial-report/',
      }
    case '/es/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/es/financial-report/',
      }
    case '/ru/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/ru/financial-report/',
      }
    case '/id/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/id/financial-report/',
      }
    case '/de/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/de/financial-report/',
      }
    case '/zh/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/zh/financial-report/',
      }
    case '/it/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/it/financial-report/',
      }
    case '/ko/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/ko/financial-report/',
      }
    case '/tr/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/tr/financial-report/',
      }
    case '/vi/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/vi/financial-report/',
      }

    // END FINANTIAL REPORT

    // =================== //

    // AIRDROP

    case '/airdrop/':
    case '/en/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/airdrop/',
      }
    case '/es/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/es/airdrop/',
      }
    case '/ru/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/ru/airdrop/',
      }
    case '/id/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/id/airdrop/',
      }
    case '/de/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/de/airdrop/',
      }
    case '/zh/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/zh/airdrop/',
      }
    case '/it/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/it/airdrop/',
      }
    case '/ko/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/ko/airdrop/',
      }
    case '/tr/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/tr/airdrop/',
      }
    case '/vi/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/vi/airdrop/',
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
