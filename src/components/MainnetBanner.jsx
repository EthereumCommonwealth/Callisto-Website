import React from 'react'
import Countdown from 'react-countdown-now';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>You are good to go!</span>;
  } else {
    return (
      <div className="MainetBanner-mainnet-content">
        <h3 className="MainetBanner-mainnet-title">Mainnet Release in:</h3>
        <span className="MainetBanner-mainnet-countdown">
          <strong>{days}</strong>D : <strong>{hours}</strong>H : <strong>{minutes}</strong>M : <strong>{seconds}</strong>S
        </span>
      </div>
    );
  }
};

const MainnetBanner = () => (
  <div className="MainetBanner">
    <div className="container">
      <Countdown
        date={1523793600000}
        renderer={renderer}
      />
    </div>
  </div>
)

export default MainnetBanner
