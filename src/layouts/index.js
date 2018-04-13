import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../stylus/index.styl'
import '../stylus/fontawesome/web-fonts-with-css/css/fontawesome.min.css'
import '../stylus/fontawesome/web-fonts-with-css/css/fontawesome-all.min.css'

const title = "Callisto Network: a Blockchain technology, Cryptocurrency and Smart-Contracts"
const description = "Callisto Network is a blockchain platform with its own cryptocurrency (CLO) that is based on Ethereum protocol"
const url = "https://callisto.network"

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="CallistoSupport" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
