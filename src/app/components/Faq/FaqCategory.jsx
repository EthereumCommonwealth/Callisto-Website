import React from 'react';
import FaqArticle from './FaqArticle';

const FaqCategory = ({ id, name, articles }) => {
  if (articles.length === 0) return null
  return (
    <div className='FaqCategory'>
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
            description={article.description_text}
          />
        ))}
      </div>
    </div>
  )
}

export default FaqCategory;
