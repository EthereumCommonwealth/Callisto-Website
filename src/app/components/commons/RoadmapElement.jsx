import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RoadmapElement = ({ happened, title, items }) => {
  const mainClass = classNames('RoadmapElement', { happened: (happened) });
  return (
    <div className={mainClass}>
      <figure className='RoadmapElement-figure'>
        <img
          src={happened ?
            '/image/Roadmap_arrow_done.svg' : '/image/Roadmap_arrow_upcoming.svg'
          }
          alt='Roadmap Element'
        />
      </figure>
      <h6 className='RoadmapElement-title'>
        {title}
      </h6>
      <ul className='RoadmapElement-container'>
        {items.map((item, index) => (
          <li
            key={`RoadmapElement-${index}-${item.name}`}
            className='RoadmapElement-text'
          >
            {item.name}
            {item.subelements ? (
              <ul className='RoadmapElement-subcontainer'>
                {item.subelements.map((subelem, index) => (
                  <li key={`RoadmapElement-${index}-${subelem.name}`}>
                    {subelem.name}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

RoadmapElement.propTypes = {
  happened: PropTypes.bool,
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default RoadmapElement;
