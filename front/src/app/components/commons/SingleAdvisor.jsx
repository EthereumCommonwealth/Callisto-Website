import React from 'react';
import PropTypes from 'prop-types';

const SingleAdvisor = ({ name, position, socialNetworks, avatar }) => (
  <div className='SingleAdvisor'>
    <div className='SingleAdvisor-left'>
      <figure className='SingleAdvisor-avatar'>
        <img src={avatar} alt={name} />
      </figure>
      <h5 className='SingleAdvisor-name'>
        {name}
      </h5>
      <h6 className='SingleAdvisor-position'>
        {position}
      </h6>
    </div>
    <div className='TeamMember-social'>
      {socialNetworks.map(network => (
        <a
          key={`socialNetworks-${network.prefix}`}
          className='TeamMember-social-item'
          href={network.url}
          target='_blank'
        >
          <i className={network.prefix} />
        </a>
      ))}
    </div>
  </div>
);

SingleAdvisor.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default SingleAdvisor;
