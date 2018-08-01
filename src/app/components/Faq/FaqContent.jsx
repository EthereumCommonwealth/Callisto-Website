import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { scroller } from 'react-scroll';
import FaqCategory from './FaqCategory';

class FaqContent extends PureComponent {
  state = {
    category: '',
  }

  handleCategoryChange = (event, category) => {
    event.preventDefault();
    this.setState({ category }, () => {
      scroller.scrollTo(this.state.category, {
        duration: 500,
        delay: 100,
        smooth: true,
      });
    });
  }

  render() {
    const { faq } = this.props;
    return (
      <div className='FaqContent'>
        <div className='FaqContent-content container'>
          <div className='FaqContent-sidebar'>
            <div className='FaqContent-sidebar-content'>
              <h3 className='FaqContent-sidebar-title'>
                <FormattedMessage id='FaqSidebarTitle' />
              </h3>
              <div className='FaqContent-sidebar-categories'>
                {faq.map((category) => {
                  if (category.articles.length === 0) return null;
                  return (
                    <div
                      className='FaqContent-sidebar-category'
                      onClick={e => this.handleCategoryChange(e, category.name)}
                      key={category.id}
                    >
                      {category.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='FaqContent-elements'>
            <h1 className='FaqContent-elements-title'>
              <FormattedMessage id='FaqTitle' />
            </h1>
            {/* <span className='FaqContent-elements-subtitle'>
              <FormattedMessage id='FaqDescription' /> <a href='mailto:contact@callisto.com'>
                contact@callisto.com
              </a>
            </span> */}
            <div className='FaqContent-elements-categories'>
              {faq.map((category) => <FaqCategory key={category.id} {...category} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    faq: state.faq,
  };
}

FaqContent.propTypes = {
  faq: PropTypes.array,
};

export default connect(mapStateTopProps)(FaqContent)
