import React, { PureComponent } from 'react';

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
      <div className='FaqArticle' onClick={this.handleOpen}>
        <div className='FaqArticle-top'>
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
            <p className='FaqArticle-description'>
              {description}
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default FaqArticle;
