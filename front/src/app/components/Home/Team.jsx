import React from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { injectIntl } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';
import TeamMember from '../commons/TeamMember';

const Team = ({ intl, teamMembers }) => (
  <Element name='team' className='Team'>
    <div className='Team-content container'>
      <SectionHeading
        title={intl.formatMessage({ id: 'OurTeam' })}
        description={intl.formatMessage({ id: 'OurTeamDescription' })}
      />
      <div className='Team-list'>
        {teamMembers.length > 0 ?
          teamMembers.map(member => (
            <TeamMember
              key={member.name}
              avatar={member.avatar}
              name={member.name}
              position={member.position}
              socialNetworks={member.socialNetworks}
              bio={member.bio}
            />
          )) : null
        }
      </div>
    </div>
  </Element>
);

function mapStateTopProps(state) {
  return {
    teamMembers: state.teamMembers,
  };
}

export default injectIntl(connect(mapStateTopProps)(Team));
