import Hashcity from "assets/images/HashCity-logo-transparent.png"

import t from '../components/Header/types';
import { Assets } from './images';

export const links = [
    {
        type: t.DROPDOWN,
        name: "Services",
        link: "/services",
    },{
        type: t.DROPDOWN,
        name: "Ecosystem",
        link: "/ecosystem",
    },{
        type: "",
        name: "Blog",
        link: "/blog",
    },{
        type: "",
        name: "Cryptocurrency",
        link: "/cryptocurrency",
    },{
        type: "",
        name: "Get an audit",
        link: "/news",
    },{
        type: t.RECT,
        name: "Whitepaper",
        link: "/whitepaper",
    }
];

export const social = [
    {
        name: "telegram",
        link: "https://t.me/CallistoNet",
    },{
        name: "twitter",
        link: "https://twitter.com/CallistoSupport",
    },{
        name: "reddit",
        link: "https://www.reddit.com/r/CallistoCrypto/",
    },{
        name: "youtube",
        link: "https://www.youtube.com/c/CallistoNetwork",
    },{
        name: "instagram",
        link: "https://www.instagram.com/callisto.network",
    },{
        name: "facebook",
        link: "https://www.facebook.com/callistonetwork",
    },{
        name: "linkedin",
        link: "https://www.linkedin.com/company/callisto-network/",
    },{
        name: "bitcoin",
        link: "https://bitcointalk.org/index.php?topic=3380156.0",
    }
];

export const resources = [
    {
        name: "FAQ",
        link: "https://callisto.network/faq/",
    },{
        name: "Timeline",
        link: "https://callisto.network/timeline/",
    },{
        name: "Airdrop",
        link: "https://callisto.network/callisto-airdrop/",
    },{
        name: "Community Guidelines",
        link: "https://callisto.network/community-guidelines/",
    }
]

export const callisto = [
    {
        name: "Partners",
        link: "https://callisto.network/partners/",
    },{
        name: "GitHub",
        link: "https://github.com/EthereumCommonwealth/Callisto-Website",
    },{
        name: "Media Kit",
        link: "https://github.com/EthereumCommonwealth/Callisto-Media-Kit",
    },{
        name: "Contact us",
        link: "https://callisto.network/contact-us/",
    },{
        name: "Want to sell your CLO coins OTC?",
        link: "https://callisto.network/contact-us/",
    }
]


export const partners = [
    "https://callisto.network/wp-content/uploads/2020/12/SCA-logo-transparent.jpg",
    // "https://callisto.network/wp-content/uploads/2020/12/McAfeeDex-logo-transparent.jpg",
    "https://callisto.network/wp-content/uploads/2020/12/Invictus-logo-transparent.jpg",
    "https://callisto.network/wp-content/uploads/2020/12/Bitfinex-logo-transparent.jpg",
    "https://callisto.network/wp-content/uploads/2020/12/HitBTC-Logo-transparent.jpg",
    "https://callisto.network/wp-content/uploads/2020/12/Stex-pool-pro-logo-transparent.jpg",
    "https://callisto.network/wp-content/uploads/2020/12/Trust-logo-transparent.jpg",
    "https://callisto.network/wp-content/uploads/2020/12/Coinomi-pool-pro-logo-transparent.jpg",
    "https://callisto.network/wp-content/uploads/2020/12/Guarda-pro-logo-transparent.jpg",
    "https://callisto.network/wp-content/uploads/2020/12/CLO-pool-pro-logo-transparent.jpg",
    "https://callisto.network/wp-content/uploads/2020/12/Maxhash-logo-transparent.jpg",
    // "https://callisto.network/wp-content/uploads/2020/12/f2pool-logo-transparent.jpg",
    "https://callisto.network/wp-content/uploads/2020/12/Comining-logo-transparent.jpg",
    Hashcity,
    "https://callisto.network/wp-content/uploads/2020/12/SCA-logo-transparent.jpg",
    "https://callisto.network/wp-content/uploads/2020/12/Invictus-logo-transparent.jpg",
    "https://callisto.network/wp-content/uploads/2020/12/Bitfinex-logo-transparent.jpg",
    "https://callisto.network/wp-content/uploads/2020/12/HitBTC-Logo-transparent.jpg",
    "https://callisto.network/wp-content/uploads/2020/12/Stex-pool-pro-logo-transparent.jpg",
];

export const coreteams = [
    {
        name: "Vladimír Vencálek",
        avatar: Assets.p1,
        role: "Chief Executive Officer/CEO",
        description: [
            "CEO of Invictus Solutions (CZ)",
            "Solution Architect with more than 15 years of experience and leadership roles",
        ],
        email: "",
        twitter: "",
        linkedIn: ""
    },{
        name: "Yohan Graterol",
        avatar: Assets.p2,
        role: "Chief Operating Officer/COO",
        description: [
            "Co Founder Callisto Network",
            "Main Presenter CoinaryTV",
        ],
        email: "",
        twitter: "",
        linkedIn: ""
    },{
        name: "Laurent Riche",
        avatar: Assets.p3,
        role: "Chief Marketing Officer/CMO",
        description: [
            "Former Callisto core team member since 2018",
            "Lead of Soy.Finance",
        ],
        email: "",
        twitter: "",
        linkedIn: ""
    },{
        name: "Karel Fillner",
        avatar: Assets.p4,
        role: "Chief Strategy Officer/CSO",
        description: [
            "CEO of Invictus Mining",
            "Main advisor of Callisto Enterprise",
        ],
        email: "",
        twitter: "",
        linkedIn: ""
    },{
        name: "Dexaran",
        avatar: Assets.p6,
        role: "Researching Team Lead",
        description: [
            "EthereumCommonwealth Founder",
            "Creator of #ERC223 Standard"
        ],
        email: "",
        twitter: "",
        linkedIn: ""
    },{
        name: "Yuriy",
        avatar: Assets.p5,
        role: "Auditors Team Lead",
        description: [
            "Former auditor in Callisto project since 2018",
            "Main Callisto smart contract developer",
        ],
        email: "",
        twitter: "",
        linkedIn: ""
    },{
        name: "Muf Moto",
        avatar: Assets.am6,
        role: "Project Manager",
        description: [
            "More than 25 years of experience in the IT industry in different positions and involved in the Czech crypto-community for over 5 years.",
        ],
        email: "",
        twitter: "",
        linkedIn: ""
    },{
        name: "MJ",
        avatar: Assets.am9,
        role: "Lead Analyst",
        description: [
            "Processing solid experience in data gathering, processing and analysis, worked on several development projects with data focus from the inside out.",
        ],
        email: "",
        twitter: "",
        linkedIn: ""
    },{
        name: "Wang",
        avatar: Assets.p7,
        role: "Senior Frontend Developer",
        description: [
            "Member since 2021",
            "Senior frontend(Mobile/Web) & backend developer"
        ],
        email: "mobiledev111118@gmail.com",
        twitter: "https://twitter.com/",
        linkedIn: "https://www.linkedin.com/in/wang-weisan-2a6152197/"
    },{
        name: "Gerhard Fourie",
        avatar: Assets.p9,
        role: "Video & Digital Marketing Specialist",
        description: [
            "CEO of Invictus Mining",
            "Main advisor of Callisto Enterprise"
        ],
        email: "",
        twitter: "",
        linkedIn: ""
    },{
        name: "Veno N'detti",
        avatar: Assets.p8,
        role: "Game Development Expert",
        description: [],
        email: "",
        twitter: "",
        linkedIn: ""
    }
];


export const devteams = [
    {
        name: "Dr ZS",
        avatar: Assets.am1,
        role: "Advisor",
        tele: "@zvse3"
    },{
        name: "Maximus",
        avatar: Assets.am2,
        role: "Ambassador",
        tele: "@Maximus_el",
    },{
        name: "Mad Catter",
        avatar: Assets.am3,
        role: "Russian Ambassador",
        tele: "@MadCatter"
    },{
        name: "11",
        avatar: Assets.am4,
        role: "Vietnamese Ambassador",
        tele: "@NB1011"
    },{
        name: "JAE",
        avatar: Assets.am5,
        role: "Korean Ambassador",
        tele: "@newgenex"
    },{
        name: "Smart Vector",
        avatar: Assets.am7,
        role: "African Ambassador",
        tele: "@SmartVector"
    },
    // {
    //     name: "Mike",
    //     avatar: Assets.am8,
    //     role: "Ambassador",
    //     tele: "@cryptodaddy007",
    // },
    {
        name: "Co BE Kieu Ky",
        avatar: Assets.am10,
        role: "Admin",
        tele: "@CobeKieuky"
    },{
        name: "Jet Ong",
        avatar: Assets.am11,
        role: "Admin",
        tele: "@jetong"
    },{
        name: "Abdou Sam",
        avatar: Assets.am12,
        role: "Admin",
        tele: "@Abdousam"
    },{
        name: "Kite",
        avatar: Assets.am13,
        role: "Admin",
        tele: "@Mikaril"
    },{
        name: "Jumpy71",
        avatar: Assets.am14,
        role: "Admin",
        tele: "@Jumpy1971"
    },{
        name: "Carlos Leiton",
        avatar: Assets.carlos,
        role: "Admin",
        tele: "@caleiton"
    },{
        name: "Miles",
        avatar: Assets.miles,
        role: "Admin",
        tele: "@S6AeK3R"
    }
]

export const features = [
    {
        img: Assets.f1logo,
        desc: "Callisto Network is a proof-of-work blockchain with a strong emphasis on security. Building on its native cryptocurrency (CLO), Callisto Network is a layer 1 smart contract solution offering a unique set of features."
    },
    {
        img: Assets.f2logo,
        desc: "Security is the true catalyst for the adoption of any technology. With this in mind, we have created Callisto's Security Department, a team of decentralized auditors."
    },
    {
        img: Assets.f3logo,
        desc: "One of Callisto Network's unique features is the ability to earn a monthly passive income simply by holding CLO coins."
    }
]

export const newsdata = [
    {
        id: "1",
        img: Assets.news01,
        twitter: "",
        link: "https://callisto.network/introducing-callisto-bridge/",
        date: "08.11.2021",
        title: "Callisto Bridge on Testnet.",
        desc: "Extending Callisto Network ecosystem to Binance Smart Chain and Ethereum."
    },
    {
         id: "2",
         img: Assets.news02,
         twitter: "",
         link: "https://coinmarketcal.com/en/news/from-bitcoin-to-callisto-network-cryptomining-evolution",
         date: "07.31.2021",
         title: "CryptoMining Evolution",
         desc: "Terms like Blockchain, Cryptocurrency, and Cryptomining entered our world with Bitcoin. However, technology is designed to evolve."
    },
   {
        id: "3",
        img: Assets.news03,
        twitter: "",
        link: "https://gov.callisto.network/",
        date: "08.06.2021",
        title: "Callisto Forum is Live",
        desc: "Discover guides, and articles related to our ecosystem."
    },
    {
        id: "4",
        img: Assets.news04,
        twitter: "",
        link: "https://twitter.com/CLOEnterprise/status/1418979197528195075",
        date: "07.24.2021",
        title: "MJ joined Callisto Enterprise.",
        desc: "We are delighted to welcome MJ as Lead Analyst."
    },
    {
        id: "5",
        img: Assets.news05,
        twitter: "",
        link: "https://www.youtube.com/watch?v=BjuhK0wdt90",
        date: "07.24.2021",
        title: "Crypto Moon Day",
        desc: "Such a special day for the Crypto community."
    },
    {
        id: "6",
        img: Assets.news06,
        twitter: "",
        link: "https://twitter.com/CallistoSupport/status/1416013934591717378",
        date: "07.16.2021",
        title: "Emergence of Callisto Network.",
        desc: "Discover the background of a major episode in the #crypto history."
    },
    {
        id: "7",
        img: Assets.news07,
        twitter: "",
        link: "https://callisto.network/blockchain-101-what-is-blockchain/",
        date: "07.17.2021",
        title: "Callisto Academy",
        desc: "15 000 $CLO to be distributed in Telegram at 15:15 UTC. Join our community and get your coins!!"
    },
    {
        id: "8",
        img: Assets.news08,
        twitter: "",
        link: "https://www.youtube.com/watch?v=R06nGQQ2ALg",
        date: "07.11.2021",
        title: "15 000 Twitter Followers Milestone",
        desc: "For this occasion we are organizing an Airdrop on Telegram."
    },
    {
        id: "9",
        img: Assets.news09,
        twitter: "",
        link: "https://twitter.com/BitcoinComExch/status/1413147666536566793",
        date: "07.08.2021",
        title: "CLO is listed on Bitcoin Exchange",
        desc: "You can now trade $CLO with BTC, ETH, and USDT on Bitcoin Exchange."
   },
   {
       id: "10",
       img: Assets.news10,
       twitter: "",
       link: "https://twitter.com/CLOEnterprise/status/1412821590971138057",
       date: "07.07.2021",
       title: "Dmitry Kuzmin Joins the Team",
       desc: "Dmitry Kuzmin has joined our team as the main 3D designer."
    },
]

export const ecosdata = [
    {
        title: "Smart Contract Audits",
        desc: [
            "Callisto Network assists smart contract developers in reducing risks and flaws in their smart contract code. Doing so boosts the adoption of programmable blockchains for the benefit of the entire crypto industry.",
            "Having completed over 350 smart contract audits, including many major projects, Callisto Network has established itself as the leading independent security expert."
        ],
        img: Assets.ecomark1,
        link: "https://callisto.network/smart-contract-audit/"
    },{
        title: "Smart Contact Migration Service",
        desc: [
            "Callisto Netowork puts its experience and knowledge at the service of developers who desire to migrate their DApps from Ethereum chain to EOS.",
        ],
        img: Assets.ecomark2,
        link: "https://callisto.network/smart-contract-migration/",
    },{
        title: "CryptoBot",
        desc: [
            "CryptoBot offers Telegram users a full range of features, from sending and receiving cryptocurrencies to earning passive income.",
            "Requiring no configuration, Cryptobot can be added quickly and easily to any Telegram group and thus become a fantastic marketing tool to interact with the community like never before."
        ],
        img: Assets.ecomark3,
        link: "https://callisto.network/cryptobot/",
    },{
        title: "Cold Staking",
        desc: [
            "One of Callisto’s unique features is earning a monthly passive income through a process called Cold Staking.",
            "The Cold Staking smart contract receives 40% of all CLO mining rewards and distributes them to cold stackers in direct proportion to their stakes."
        ],
        img: Assets.ecomark4,
        link: "https://callisto.network/cold-staking/",
    },{
        title: "BUSTD Stablecoin",
        desc: [
            "The Bulls USD ($BUSDT) token is backed by US Dollar at a 1:1 ratio. To ensure trust, this peg is maintained through a smart contract. Therefore 1 Bull USDT is always 1 USD, regardless of the cryptocurrency market’s volatility.",
            "The perfect complement to Soy.Finance, the BUSDT token can also be invested to receive a passive income."
        ],
        img: Assets.ecomark5,
        link: "https://bulls-investing-club.medium.com/busdt-a-stablecoin-for-the-callisto-network-ecosystem-e9ef0830842"
    },{
        title: "Soy Finance",
        desc: [
            "Soy.Finance is a complete DeFi solution on Callisto Network blockchain, including a decentralized swap and yield farming.",
            "Beyond the decentralization, the reduced fees and the user experience, Soy.Finance stands for security."
        ],
        img: Assets.ecomark6,
        link: "https://soy.finance/"
    },{
        title: "Callisto Treasury",
        desc: [
            "Callisto Network is not based on pre-mined coins or an ICO, and initially, its funding was based on one of its technical features: The Treasury.",
            "The Callisto Treasury receives 10% of all mined blocks. With these funds, it is anticipated to finance the development of the projects proposed and voted by the community."
        ],
        img: Assets.ecomark7,
        link: "https://gov.callisto.network/c/callisto-treasury-funding/6"
    },{
        title: "Callisto Enterprise",
        desc: [
            "Callisto Enterprise aims to allow any company to achieve its Blockchain ambitions by offering a range of services to outsource the technical process.",
            "Callisto Enterprise's experts have the skills to help you along the way from in-house solutions to consulting."
        ],
        img: Assets.ecomark8,
        link: "https://callistoenterprise.com/"
    }
]

export const securitydata = [
    {
        id: "009",
        img: Assets.secmark9,
        title1: "Security",
        title2: "First",
        link: "https://callisto.network/mermaid-finance-token-security-audit/",
        desc: [
            {
                id: "desc01",
                title: "An Unstopable Platform",
                contents: "Callisto Network has never been 51% attacked or hacked, making the Dapps running on it the safest in the blockchain ecosystem."
            },{
                id: "desc02",
                title: "The Leading Security Experts",
                contents: "Our experts have made many contributions to improve Ethereum, Ethereum Classic, EOS, and have audited more than 350 smart contracts."
            }
        ]
    },
    {
        id: "001",
        img: Assets.secmark1,
        title1: "Security",
        title2: "First",
        link: "https://callisto.network/banketh-token-security-audit/",
        desc: [
            {
                id: "desc01",
                title: "An Unstopable Platform",
                contents: "Callisto Network has never been 51% attacked or hacked, making the Dapps running on it the safest in the blockchain ecosystem."
            },{
                id: "desc02",
                title: "The Leading Security Experts",
                contents: "Our experts have made many contributions to improve Ethereum, Ethereum Classic, EOS, and have audited more than 350 smart contracts."
            }
        ]
    },
    {
        id: "002",
        img: Assets.secmark2,
        title1: "Security",
        title2: "First",
        link: "https://callisto.network/axiemon-token-security-audit/",
        desc: [
            {
                id: "desc01",
                title: "An Unstopable Platform",
                contents: "Callisto Network has never been 51% attacked or hacked, making the Dapps running on it the safest in the blockchain ecosystem."
            },{
                id: "desc02",
                title: "The Leading Security Experts",
                contents: "Our experts have made many contributions to improve Ethereum, Ethereum Classic, EOS, and have audited more than 350 smart contracts."
            }
        ]
    },
    {
        id: "003",
        img: Assets.secmark3,
        title1: "Security",
        title2: "First",
        link: "https://callisto.network/big-doge-coin-security-audit/",
        desc: [
            {
                id: "desc01",
                title: "An Unstopable Platform",
                contents: "Callisto Network has never been 51% attacked or hacked, making the Dapps running on it the safest in the blockchain ecosystem."
            },{
                id: "desc02",
                title: "The Leading Security Experts",
                contents: "Our experts have made many contributions to improve Ethereum, Ethereum Classic, EOS, and have audited more than 350 smart contracts."
            }
        ]
    },
    {
        id: "004",
        img: Assets.secmark4,
        title1: "Security",
        title2: "First",
        link: "https://callisto.network/cvnx-token-and-governance-v2-security-audit/",
        desc: [
            {
                id: "desc01",
                title: "An Unstopable Platform",
                contents: "Callisto Network has never been 51% attacked or hacked, making the Dapps running on it the safest in the blockchain ecosystem."
            },{
                id: "desc02",
                title: "The Leading Security Experts",
                contents: "Our experts have made many contributions to improve Ethereum, Ethereum Classic, EOS, and have audited more than 350 smart contracts."
            }
        ]
    },
    {
        id: "005",
        img: Assets.secmark5,
        title1: "Security",
        title2: "First",
        link: "https://callisto.network/quarashi-network-security-audit/",
        desc: [
            {
                id: "desc01",
                title: "An Unstopable Platform",
                contents: "Callisto Network has never been 51% attacked or hacked, making the Dapps running on it the safest in the blockchain ecosystem."
            },{
                id: "desc02",
                title: "The Leading Security Experts",
                contents: "Our experts have made many contributions to improve Ethereum, Ethereum Classic, EOS, and have audited more than 350 smart contracts."
            }
        ]
    },
    {
        id: "006",
        img: Assets.secmark6,
        title1: "Security",
        title2: "First",
        link: "https://callisto.network/simple-private-notary-security-audit/",
        desc: [
            {
                id: "desc01",
                title: "An Unstopable Platform",
                contents: "Callisto Network has never been 51% attacked or hacked, making the Dapps running on it the safest in the blockchain ecosystem."
            },{
                id: "desc02",
                title: "The Leading Security Experts",
                contents: "Our experts have made many contributions to improve Ethereum, Ethereum Classic, EOS, and have audited more than 350 smart contracts."
            }
        ]
    },
    {
        id: "007",
        img: Assets.secmark7,
        title1: "Security",
        title2: "First",
        link: "https://callisto.network/monsta-infinite-inception-security-audit/",
        desc: [
            {
                id: "desc01",
                title: "An Unstopable Platform",
                contents: "Callisto Network has never been 51% attacked or hacked, making the Dapps running on it the safest in the blockchain ecosystem."
            },{
                id: "desc02",
                title: "The Leading Security Experts",
                contents: "Our experts have made many contributions to improve Ethereum, Ethereum Classic, EOS, and have audited more than 350 smart contracts."
            }
        ]
    },
    {
        id: "008",
        img: Assets.secmark8,
        title1: "Security",
        title2: "First",
        link: "https://callisto.network/defifarms-protocol-security-audit/",
        desc: [
            {
                id: "desc01",
                title: "An Unstopable Platform",
                contents: "Callisto Network has never been 51% attacked or hacked, making the Dapps running on it the safest in the blockchain ecosystem."
            },{
                id: "desc02",
                title: "The Leading Security Experts",
                contents: "Our experts have made many contributions to improve Ethereum, Ethereum Classic, EOS, and have audited more than 350 smart contracts."
            }
        ]
    },
    {
        id: "009",
        img: Assets.secmark10,
        title1: "Security",
        title2: "First",
        link: "https://callisto.network/mypetsocial-token-security-audit/",
        desc: [
            {
                id: "desc01",
                title: "An Unstopable Platform",
                contents: "Callisto Network has never been 51% attacked or hacked, making the Dapps running on it the safest in the blockchain ecosystem."
            },{
                id: "desc02",
                title: "The Leading Security Experts",
                contents: "Our experts have made many contributions to improve Ethereum, Ethereum Classic, EOS, and have audited more than 350 smart contracts."
            }
        ]
    },
]

export const discoverdata = [
    {
        id: "001",
        img: Assets.back5,
        title: "Discover Callisto Network",
        desc1: "Callisto Network started as a self-sustained and self-funded blockchain ecosystem not financed by pre-mined coins or an ICO.",
        desc2: "Since its launch by the developers of Ethereum Commonwealth (Ethereum Classic), Callisto Network focused its attention on the weakness of the cryptocurrency space, namely the security.",
        link: "https://callisto.network/faq/"
    }
]
