import React from 'react';
import { Element } from 'react-scroll';
import SectionHeading from './commons/SectionHeading';
import TeamMember from './commons/TeamMember';

const Team = () => (
  <Element name='team' className='Team'>
    <div className='Team-content container'>
      <SectionHeading
        title='Our Team'
        description='Meet the people that are going to take your business to the next level'
      />
      <div className='Team-list'>
        <TeamMember
          avatar='/image/avatars/dexaran_avatar.png'
          name='Dexaran'
          position='CEO'
          socialNetworks={[
            {
              prefix: 'twitter',
              url: 'https://twitter.com/sampol18/'
            }
          ]}
          bio={
            `The entrepreneur and inventor in the areas of mobile development,
            blocking, digital marketing, as well as in the areas of AI and ERP.`
          }
        />
        <TeamMember
          avatar='/image/avatars/yohan_avatar.jpeg'
          name='Yohan Graterol'
          position='CTO'
          socialNetworks={[
            {
              prefix: 'twitter',
              url: 'https://twitter.com/yograterol/'
            }
          ]}
          bio={
            `The entrepreneur and inventor in the areas of mobile development,
            blocking, digital marketing, as well as in the areas of AI and ERP.`
          }
        />
        <TeamMember
          avatar='/image/avatars/sampol_avatar.jpg'
          name='Carlos Sampol'
          position='Development Team'
          socialNetworks={[
            {
              prefix: 'twitter',
              url: 'https://twitter.com/sampol18/'
            }
          ]}
          bio={
            `The entrepreneur and inventor in the areas of mobile development,
            blocking, digital marketing, as well as in the areas of AI and ERP.`
          }
        />
        <TeamMember
          avatar='/image/avatars/dardan_avatar.png'
          name='Dardan Latifi'
          position='Team Member'
          socialNetworks={[
            {
              prefix: 'twitter',
              url: 'https://twitter.com/sampol18/'
            }
          ]}
          bio={
            `The entrepreneur and inventor in the areas of mobile development,
            blocking, digital marketing, as well as in the areas of AI and ERP.`
          }
        />
        <TeamMember
          avatar='/image/avatars/darwino_avatar.png'
          name='@darwino'
          position='Callisto Indonesia Ambassador'
          socialNetworks={[
            {
              prefix: 'twitter',
              url: 'https://twitter.com/sampol18/'
            }
          ]}
          bio={
            `The entrepreneur and inventor in the areas of mobile development,
            blocking, digital marketing, as well as in the areas of AI and ERP.`
          }
        />
        <TeamMember
          avatar='/image/avatars/methw_avatar.png'
          name='Methw'
          position='Callisto Indonesia Ambassador'
          socialNetworks={[
            {
              prefix: 'twitter',
              url: 'https://twitter.com/sampol18/'
            }
          ]}
          bio={
            `The entrepreneur and inventor in the areas of mobile development,
            blocking, digital marketing, as well as in the areas of AI and ERP.`
          }
        />
        <TeamMember
          avatar='/image/avatars/crika_avatar.jpg'
          name='Crika - Ivan'
          position='Team Member'
          socialNetworks={[
            {
              prefix: 'linkedin-in',
              url: 'https://twitter.com/sampol18/'
            }
          ]}
          bio={
            `The entrepreneur and inventor in the areas of mobile development,
            blocking, digital marketing, as well as in the areas of AI and ERP.`
          }
        />
        <TeamMember
          avatar='/image/avatars/mario_avatar.jpg'
          name='Mario Michel'
          position='Team Member'
          socialNetworks={[
            {
              prefix: 'facebook-f',
              url: 'https://twitter.com/sampol18/'
            },
            {
              prefix: 'twitter',
              url: 'https://twitter.com/sampol18/'
            },
          ]}
          bio={
            `The entrepreneur and inventor in the areas of mobile development,
            blocking, digital marketing, as well as in the areas of AI and ERP.`
          }
        />
        <TeamMember
          avatar='/image/avatars/nsawinyh_avatar.png'
          name='Nick Sawinyh'
          position='Team Member'
          socialNetworks={[
            {
              prefix: 'twitter',
              url: 'https://twitter.com/sampol18/'
            }
          ]}
          bio={
            `The entrepreneur and inventor in the areas of mobile development,
            blocking, digital marketing, as well as in the areas of AI and ERP.`
          }
        />
      </div>
    </div>
  </Element>
);

export default Team;
