import React from 'react'
import { Element } from 'react-scroll'
import dexaran from '../images/dexaran_avatar.png'
import yohan from '../images/yohan_avatar.jpeg'
import sampol from '../images/sampol_avatar.jpg'

const Team = () => (
  <Element className="Team container" name="Team">
    <h2 className="Team-title">
      Callisto Team
    </h2>
    <p className="Team-subtitle">
      Meet the people that are going to take your business to the next level.
    </p>
    <div className="Team-list">
      <div className="Team-list-element">
        <figure className="Team-list-element-figure">
          <img src={dexaran} alt="Dexaran" />
        </figure>
        <div className="Team-list-element-detail">
          <div className="Team-list-element-detail-top">
            <span className="Team-list-element-detail-name">Dexaran</span>
            <span className="Team-list-element-detail-position">CEO</span>
          </div>
          <div className="Team-list-element-detail-bottom">
            <span className="Team-list-element-detail-name">Co Founder of Callisto</span>
            <a
              href="mailto:dexaran@callisto.network"
              className="Team-list-element-detail-mail"
            >
              dexaran@callisto.network
            </a>
          </div>
        </div>
      </div>
      <div className="Team-list-element">
        <figure className="Team-list-element-figure">
          <img src={yohan} alt="Yohan Graterol" />
        </figure>
        <div className="Team-list-element-detail">
          <div className="Team-list-element-detail-top">
            <span className="Team-list-element-detail-name">Yohan Graterol</span>
            <span className="Team-list-element-detail-position">CTO</span>
          </div>
          <div className="Team-list-element-detail-bottom">
            <span className="Team-list-element-detail-name">Co Founder of Callisto</span>
            <a
              href="mailto:yohan@callisto.network"
              className="Team-list-element-detail-mail"
            >
              yohan@callisto.network
            </a>
          </div>
        </div>
      </div>
      <div className="Team-list-element">
        <figure className="Team-list-element-figure">
          <img src={sampol} alt="Carlos Sampol" />
        </figure>
        <div className="Team-list-element-detail">
          <div className="Team-list-element-detail-top">
            <span className="Team-list-element-detail-name">Carlos Sampol</span>
            <span className="Team-list-element-detail-position">Frontend Developer</span>
          </div>
          <div className="Team-list-element-detail-bottom">
            <span className="Team-list-element-detail-name">React Developer</span>
            <a
              href="mailto:s@callisto.network"
              className="Team-list-element-detail-mail"
            >
              s@callisto.network
            </a>
          </div>
        </div>
      </div>
    </div>
  </Element>
)

export default Team
