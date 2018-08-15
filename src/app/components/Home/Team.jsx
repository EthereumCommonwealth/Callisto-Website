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
              My main specialty is information security. I’ve been an Ethereum
              smart-contracts developer since its first days. I created the ERC223
              token standard and founded DEX ICO and the Ethereum Commonwealth.
              I was formerly a security auditor.
            `
          }
        />
        <TeamMember
          avatar='/image/avatars/yohan_avatar.jpg'
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
            {
              prefix: 'fab fa-bitcoin',
              url: 'https://bitcointalk.org/index.php?action=profile;u=1147564',
            },
            {
              prefix: 'far fa-envelope',
              url: 'mailto:yograterol@callisto.network'
            },
          ]}
          bio={
            `
              Hi, I’m a backend developer (Python and Go) with over seven years of
              experience. I have worked for as a Head of Product for three years.
              The cryptocurrency world is my passion.
            `
          }
        />
        <TeamMember
          avatar='/image/avatars/sampol_avatar.jpg'
          name='Carlos Sampol'
          position='Head of Web Development'
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
              prefix: 'far fa-envelope',
              url: 'mailto:s@protonmail.com'
            },
            {
              prefix: 'fab fa-linkedin-in',
              url: 'https://www.linkedin.com/in/carlossampol/',
            },
          ]}
          bio={
            `
              Skilled in the Frontend development Environment with knowledge
              in HTML5/CSS3, Javascript (React JS) and Backend Environments
              with Node.js. Worked in several important startups such as Platzi
              or GoRead.
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
              prefix: 'far fa-envelope',
              url: 'mailto:nsawinyh@callisto.network '
            },
            {
              prefix: 'fab fa-linkedin-in',
              url: 'https://www.linkedin.com/in/sawinyh/',
            },
          ]}
          bio={
            `
              I have over 12 years of experience working in digital marketing
              and product management. My specialties include product development,
              brand awareness, and omnichannel marketing campaigns.
            `
          }
        />
        <TeamMember
          avatar='/image/avatars/darwino_avatar.jpg'
          name='Darwin Ongko'
          position='Callisto Community Manager & Callisto Indonesia Ambassador'
          socialNetworks={[
            {
              prefix: 'fab fa-telegram-plane',
              url: 'https://t.me/Darwino'
            },
            {
              prefix: 'far fa-envelope',
              url: 'mailto:darwino@callisto.network',
            },
            {
              prefix: 'fab fa-instagram',
              url: 'https://www.instagram.com/darwinongko/',
            },
          ]}
          bio={
            `
              I have over 8 years of experience working at a life insurance
              company as an agency manager for Prudential Life Assurance and
              7 years at Generali Indonesia as an Agency Business Director,
              managing more than 4,000 people from 10 cities in Indonesia within
              the agency.
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
              Extensive experience in engineering & management, specialized in
              storage and SAN networks. More than 10 years’ experience in
              information technology, with hands-on experience in research,
              design, and implementation of new technologies and system integration.
            `
          }
        />
        <TeamMember
          avatar='/image/avatars/methw_avatar.jpeg'
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
              Strong information technology background with a Bachelor of Science
              (B.Sc.) in Computer Science and electronics. Diverse IT experience
              with a demonstrated history in network administration, cloud
              computing, blockchain technology and cryptocurrency.
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
              Motivated, worked as an IT project manager for over 13 years.
              Owner of ProffeeCa since May, 2016. Enthusiastic and loves to learn
              new things.
            `
          }
        />
        <TeamMember
          avatar='/image/avatars/yuriy_avatar.jpg'
          name='Yuriy Kharytoshyn'
          position='Security Auditing Manager'
          socialNetworks={[
            {
              prefix: 'fab fa-telegram-plane',
              url: 'https://t.me/yuriy77k',
            },
            {
              prefix: 'far fa-envelope',
              url: 'mailto:yuriy77k@gmail.com',
            },
            {
              prefix: 'fab fa-github',
              url: 'https://github.com/yuriy77k',
            },
          ]}
          bio={
            `
              I’m Information Security expert with over 18 years experience.
              Backend Developer (C/C++, Python, PHP, Assembler) of InfoSec
              related projects. Since 2016, focused on Blockchain technologies
              and Smart contract security. A Master of Science (M.Sc.) in
              Computer Science and Мathematic.
            `
          }
        />
        <TeamMember
          avatar='/image/avatars/akira_avatar.png'
          name='Akira Takizawa'
          position='Blockchain engineer'
          socialNetworks={[
            {
              prefix: 'fab fa-github',
              url: 'https://github.com/akx20000a',
            },
            {
              prefix: 'far fa-envelope',
              url: 'mailto:akx20000@protonmail.com',
            },
            {
              prefix: 'fab fa-linkedin-in',
              url: 'https://www.linkedin.com/in/akira-takizawa-11341015a/',
            },
          ]}
          bio={
            `
              Empowering blockchain ecosystem with knowledge of
              backend development and server engineering,
              I’ve been contributed on open source development for more than 5 years,
              talented on cryptocurrency marketing and former director
              of several blockchain projects.
            `
          }
        />
      </div>
    </div>
  </Element>
);

export default injectIntl(Team);
