import React from 'react';
import { Element } from 'react-scroll';
import { injectIntl } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';
import TeamMember from '../commons/TeamMember';

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
              Worked in several important startups such as Platzi or GoRead.
            `
          }
        />
        <TeamMember
          avatar='/image/avatars/nsawinyh_avatar.jpg'
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
          avatar='/image/avatars/darwino_avatar2.png'
          name='Darwino'
          position='Callisto Community Manager & Callisto Indonesia Ambassador'
          socialNetworks={[
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
          avatar='/image/avatars/dardan_avatar.jpg'
          name='Dardan Latifi'
          position='Head of Social Media'
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
          name='Methw - Nug'
          position='Documentation Writer '
          socialNetworks={[
            {
              prefix: 'fab fa-telegram-plane',
              url: 'https://t.me/methwZ',
            },
            {
              prefix: 'far fa-envelope',
              url: 'mailto:methw@callisto.network',
            },
          ]}
          bio={
            `
              Strong information technology professional with a Bachelor of
              Science (B.Sc.) focused in Computer Science and electronics.
              Experienced IT related field with a demonstrated history of
              working in Network Administration, Cloud Computing, Blockchain
              Technology and cryptocurrency.
            `
          }
        />
        <TeamMember
          avatar='/image/avatars/tio_avatar.jpeg'
          name='Tio Toi'
          position='Head of Community'
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
      </div>
    </div>
  </Element>
);

export default injectIntl(Team);
