import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FaqArticle extends PureComponent {
  state = {
    open: false,
  };

  handleOpen = event => {
    event.preventDefault();
    this.setState({ open: !this.state.open });
  }

  render() {
    const { title, description } = this.props;
    return (
      <div className='FaqArticle'>
        <div className='FaqArticle-top' onClick={this.handleOpen}>
          <div className='FaqArticle-top-elem'>
            {this.state.open ? (
              <span className='FaqArticle-top-signal'>-</span>
            ) : (
              <span className='FaqArticle-top-signal'>+</span>
            )}
          </div>
          <h3 className='FaqArticle-title'>{title}</h3>
        </div>
        {this.state.open ? (
          <div className='FaqArticle-bottom'>
            <div />
            <p
              className='FaqArticle-description'
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

FaqArticle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default FaqArticle;
