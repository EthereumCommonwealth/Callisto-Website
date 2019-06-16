import React, { Component } from 'react';
import ClassNames from 'classnames';

class StepVideo extends Component {
  state = {
    open: false,
  }

  handleOpen = (event) => {
    event.preventDefault();
    this.setState({ open: !this.state.open });
  }

  render() {
    const mainClass = ClassNames('StepGuide-video sixteen-nine', { 'isActive': !this.state.open });
    return (
      <div className={mainClass}>
        {this.state.open ? (
          <iframe
            className='content'
            title={this.props.title}
            src={this.props.src}
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            loading='lazy'
          />
        ) : (
          <div className='StepGuide-placeholder' onClick={this.handleOpen}>
            <h4>{this.props.title}</h4>
            <i className='fas fa-play' />
          </div>
        )}
      </div>
    )
  }
}

export default StepVideo;
