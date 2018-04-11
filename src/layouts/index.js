import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../stylus/index.styl'
import '../stylus/fontawesome/web-fonts-with-css/css/fontawesome.min.css'
import '../stylus/fontawesome/web-fonts-with-css/css/fontawesome-all.min.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Callisto Network" />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
