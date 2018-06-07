import React from 'react';
import PropTypes from 'prop-types';

const TeamMember = ({ name, position, socialNetworks, bio, avatar }) => (
  <div className='TeamMember'>
    <figure className='TeamMember-avatar'>
      <img src={avatar} alt={name} />
    </figure>
    <h5 className='TeamMember-name'>
      {name}
    </h5>
    <h6 className='TeamMember-position'>
      {position}
    </h6>
    <div className='TeamMember-social'>
      {socialNetworks.map((network, index) => (
        <a
          key={`socialNetworks-${network.prefix}`}
          className='TeamMember-social-item'
          href={network.url}
          target='_blank'
        >
          <i className={`fab fa-${network.prefix}`} />
        </a>
      ))}
    </div>
    <p className='TeamMember-bio'>
      {bio}
    </p>
  </div>
);

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  socialNetworks: PropTypes.array.isRequired,
  bio: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default TeamMember;
