import React from 'react';
import { Element } from 'react-scroll';
import { injectIntl } from 'react-intl';
import SectionHeading from './commons/SectionHeading';
import TeamMember from './commons/TeamMember';

const Team = ({ intl }) => (
  <Element name='team' className='Team'>
    <div className='Team-content container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'OurTeam' })}
        description={intl.formatMessage({ id: 'OurTeamDescription' })}
      />
      <div className='Team-list'>
        <TeamMember
          avatar='/image/avatars/dexaran_avatar.png'
          name='Dexaran'
          position='CEO, Security Engineer'
          socialNetworks={[
            {
              prefix: 'fab fa-github',
              url: 'https://github.com/Dexaran'
            },
            {
              prefix: 'far fa-envelope',
              url: 'mailto:dexaran820@gmail.com'
            },
          ]}
          bio={
            `
              My main specialization is information security. Ethereum smart-contracts
              developer from its first days. Creator of ERC223 token standard.
              Founder of DEX ICO and Ethereum Commonwealth. Ex-security auditor.`
          }
        />
        <TeamMember
          avatar='/image/avatars/yohan_avatar.jpeg'
          name='Yohan Graterol'
          position='CTO & Main Callisto Developer'
          socialNetworks={[
            {
              prefix: 'fab fa-twitter',
              url: 'https://twitter.com/yograterol/'
            },
            {
              prefix: 'fab fa-telegram-plane',
              url: 'https://t.me/yograterol'
            },
            {
              prefix: 'fab fa-linkedin-in',
              url: 'https://www.linkedin.com/in/yograterol/'
            },
          ]}
          bio={
            `
              Hi, I’m Backend Developer (Python and Go) over seven years, I have
              worked for three years as Head of Product. Cryptocurrency world is my passion.
              I like the eSports, disclaimer: I’m not professional, just amateur.
            `
          }
        />
        <TeamMember
          avatar='/image/avatars/sampol_avatar.jpg'
          name='Carlos Sampol'
          position='Development Team - React.js Developer'
          socialNetworks={[
            {
              prefix: 'fab fa-twitter',
              url: 'https://twitter.com/sampol18/',
            },
            {
              prefix: 'fab fa-telegram-plane',
              url: 'https://t.me/sampol18',
            },
            {
              prefix: 'fab fa-github',
              url: 'https://github.com/sampol18/',
            },
            {
              prefix: 'fab fa-linkedin-in',
              url: 'https://www.linkedin.com/in/carlossampol/',
            },
          ]}
          bio={
            `
              Skilled in the Frontend  development Environment with knowledge in
              HTML5/CSS3, Javascript (React JS) and Backend Environments with Node.js.
              Worked in several  startups such as Platzi, GoRead and Exclusive Traveler Club.
            `
          }
        />
        <TeamMember
          avatar='/image/avatars/nsawinyh_avatar.png'
          name='Nick Sawinyh'
          position='Head of Marketing'
          socialNetworks={[
            {
              prefix: 'fab fa-twitter',
              url: 'https://twitter.com/sawinyh/'
            },
            {
              prefix: 'fab fa-github',
              url: 'https://github.com/sneg55',
            },
            {
              prefix: 'fab fa-linkedin-in',
              url: 'https://www.linkedin.com/in/sawinyh/',
            },
          ]}
          bio={
            `
              I have over 12 years of experience working in digital marketing and
              product management. My specialties include product development,
              brand awareness, and omnichannel marketing
              campaigns.
            `
          }
        />
        <TeamMember
          avatar='/image/avatars/darwino_avatar.jpg'
          name='Darwin Ongko'
          position='Callisto Community Manager & Callisto Indonesia Ambassador'
          socialNetworks={[
            {
              prefix: 'fab fa-twitter',
              url: 'https://twitter.com/sampol18/'
            },
            {
              prefix: 'fab fa-instagram',
              url: 'https://www.instagram.com/darwin_ongko'
            },
            {
              prefix: 'fab fa-telegram-plane',
              url: 'https://t.me/Darwino'
            },
          ]}
          bio={
            `
              I have over 8 years of experience working in Life Insurance Company
              as Agency Manager of Prudential Life Assurance and 7 years until now
              in Generali Indonesia as Agency Business Director, Leading more than
              4000 people in agency from 10 cities in Indonesia.
            `
          }
        />
        <TeamMember
          avatar='/image/avatars/dardan_avatar.png'
          name='Dardan Latifi'
          position='Support & Marketing'
          socialNetworks={[
            {
              prefix: 'fab fa-twitter',
              url: 'https://twitter.com/dardanlatifi',
            },
            {
              prefix: 'far fa-envelope',
              url: 'mailto:dardan@callisto.network',
            },
            {
              prefix: 'fab fa-linkedin-in',
              url: 'https://www.linkedin.com/in/dardanlatifi',
            },
          ]}
          bio={
            `
              Extensive experience in engineering & management,
              specialized in Storage and SAN networks. More than 10 years active in
              Information Technology, with through hands-on experience in research,
              design, implementation of new technologies and system integration.
            `
          }
        />
        <TeamMember
          avatar='/image/avatars/methw_avatar.png'
          name='Methw'
          position='Callisto Indonesia Ambassador'
          socialNetworks={[
            {
              prefix: 'fab fa-twitter',
              url: 'https://twitter.com/dardanlatifi',
            },
            {
              prefix: 'far fa-envelope',
              url: 'mailto:dardan@callisto.network',
            },
            {
              prefix: 'fab fa-linkedin-in',
              url: 'https://www.linkedin.com/in/dardanlatifi',
            },
          ]}
          bio={
            `The entrepreneur and inventor in the areas of mobile development,
            blocking, digital marketing, as well as in the areas of AI and ERP.`
          }
        />
        <TeamMember
          avatar='/image/avatars/tio_avatar.jpeg'
          name='Tio Toi'
          position='Callisto Indonesia Ambassador'
          socialNetworks={[
            {
              prefix: 'fab fa-telegram-plane',
              url: 'https://t.me/tiotoi',
            },
            {
              prefix: 'far fa-envelope',
              url: 'mailto:programmer.django@gmail.com',
            },
            {
              prefix: 'fab fa-linkedin-in',
              url: 'https://www.linkedin.com/in/tio-toi-192279165/',
            },
          ]}
          bio={
            `
              Motivated, working as an IT project manager with more than 13 years
              industry experience. From May 2016, owner of ProffeeCa. Enthusiastic
              and love to learn new things
            `
          }
        />
        <TeamMember
          avatar='/image/avatars/crika_avatar.jpg'
          name='Ivan - Crika'
          position='Reddit Community Manager , Support & Marketing'
          socialNetworks={[
            {
              prefix: 'fab fa-reddit',
              url: ' https://www.reddit.com/user/crika1/',
            },
            {
              prefix: 'far fa-envelope',
              url: 'mailto:ivan@callisto.network',
            },
            {
              prefix: 'fab fa-telegram-plane',
              url: ' https://t.me/crika1',
            },
          ]}
          bio={
            `
              I have a passion for all things fast pace. From Sports to cars, Boats
              to planes and anything to do with the rapid changes within technology.
              I am a jack of all trades and know how within anything to do with info technology.
              My main role is to manage the Reddit community and assist with promotional
              ideas, plans and projects as well as proactively
              assisting all areas of our team.
            `
          }
        />
        <TeamMember
          avatar='/image/avatars/mario_avatar.jpg'
          name='Mario Michel'
          position='Team Member'
          socialNetworks={[
            {
              prefix: 'fab fa-facebook-f',
              url: 'https://twitter.com/sampol18/'
            },
            {
              prefix: 'fab fa-twitter',
              url: 'https://twitter.com/sampol18/'
            },
          ]}
          bio={
            `The entrepreneur and inventor in the areas of mobile development,
            blocking, digital marketing, as well as in the areas of AI and ERP.`
          }
        />
        <TeamMember
          avatar='/image/avatars/solo_avatar.png'
          name='Anna - Solo'
          position='Marketing, Content writer and Editor'
          socialNetworks={[
            {
              prefix: 'fab fa-reddit',
              url: 'https://www.reddit.com/user/solo_xo'
            },
            {
              prefix: 'far fa-envelope',
              url: 'mailto:solo@callisto.network'
            },
          ]}
          bio={
            `
              I specialise in promotions, sales, marketing and management.
              Confidently and thoroughly enjoy working and motivating myself and
              others within any team based environments to meet common goals
              and targets. In a nutshell I strive to succeed.
            `
          }
        />
      </div>
    </div>
  </Element>
);

export default injectIntl(Team);
