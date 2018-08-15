import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import FaqArticle from './FaqArticle';

const FaqCategory = ({ id, name, articles }) => {
  if (articles.length === 0) return null
  return (
    <Element name={name} className='FaqCategory'>
      <div className='FaqCategory-title'>
        <span className='FaqCategory-title-text'>
          {name}
        </span>
      </div>
      <div className='FaqCategory-articles'>
        {articles.map((article) => (
          <FaqArticle
            key={article.id}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </Element>
  )
}

FaqCategory.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  articles: PropTypes.array,
}

export default FaqCategory;
