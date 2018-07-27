const getHeadersInfo = (target, messages, fromBlog) => {
  switch (target) {
    //HOME URLS
    case '/':
    case '/en/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/',
        baseUrl: '/',
      }
    case '/es/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/es/',
        baseUrl: '/',
      }
    case '/ru/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/ru/',
        baseUrl: '/',
      }
    case '/id/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/id/',
        baseUrl: '/',
      }
    case '/de/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/de/',
        baseUrl: '/',
      }
    case '/zh/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/zh/',
        baseUrl: '/',
      }
    case '/it/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/it/',
        baseUrl: '/',
      }
    case '/ko/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/ko/',
        baseUrl: '/',
      }
    case '/tr/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/tr/',
        baseUrl: '/',
      }
    case '/vi/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/vi/',
        baseUrl: '/',
      }
    case '/cs/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/cs/',
        baseUrl: '/',
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
        baseUrl: '/cold-staing/',
      }
    case '/es/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/es/cold-staking/',
        baseUrl: '/cold-staing/',
      }
    case '/ru/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/ru/cold-staking/',
        baseUrl: '/cold-staing/',
      }
    case '/id/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/id/cold-staking/',
        baseUrl: '/cold-staing/',
      }
    case '/de/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/de/cold-staking/',
        baseUrl: '/cold-staing/',
      }
    case '/zh/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/zh/cold-staking/',
        baseUrl: '/cold-staing/',
      }
    case '/it/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/it/cold-staking/',
        baseUrl: '/cold-staing/',
      }
    case '/ko/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/ko/cold-staking/',
        baseUrl: '/cold-staing/',
      }
    case '/tr/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/tr/cold-staking/',
        baseUrl: '/cold-staing/',
      }
    case '/vi/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/vi/cold-staking/',
        baseUrl: '/cold-staing/',
      }
    case '/cs/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/cs/cold-staking/',
        baseUrl: '/cold-staing/',
      }
    // END COLD STAKING URLS

    // =================== //

    // Smart Contracts Urls

    case '/smart-contract-audit/':
    case '/en/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/es/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/es/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/ru/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/ru/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/id/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/id/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/de/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/de/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/zh/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/zh/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/it/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/it/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/ko/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/ko/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/tr/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/tr/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/vi/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/vi/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/cs/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/cs/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
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
        baseUrl: '/financial-report/',
      }
    case '/es/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/es/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/ru/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/ru/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/id/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/id/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/de/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/de/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/zh/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/zh/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/it/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/it/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/ko/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/ko/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/tr/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/tr/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/vi/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/vi/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/cs/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/cs/financial-report/',
        baseUrl: '/financial-report/',
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
        baseUrl: '/airdrop/',
      }
    case '/es/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/es/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/ru/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/ru/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/id/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/id/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/de/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/de/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/zh/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/zh/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/it/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/it/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/ko/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/ko/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/tr/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/tr/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/vi/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/vi/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/cs/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/cs/airdrop/',
        baseUrl: '/airdrop/',
      }

    // END AIRDROP

    default:
      if (fromBlog) {
       return {
         title: messages.title,
         description: messages.description,
         image: messages.image,
         url: messages.url,
         baseUrl: `/blog/post/${messages.slug}`,
       }
      }
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/',
        baseUrl: target,
      }
  }
}

export default getHeadersInfo;
