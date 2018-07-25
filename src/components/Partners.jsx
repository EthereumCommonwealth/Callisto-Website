import React from 'react'
import { Element } from 'react-scroll'
import geto from '../images/geto_exchange.png'

const Partners = () => (
  <Element className="Partners" name="Partners">
    <div className="container">
      <h2 className="Partners-title">
        Partners
      </h2>
      <div className="Partners-list">
        <a
          className="Partners-list-element"
          target="_blank"
          href=" http://getonexchange.com/"
        >
           <figure className='Partners-list-element-figure'>
             <img src={geto} alt="Geto Exchange"/>
           </figure>
        </a>
      </div>
    </div>
  </Element>
)

export default Partners
