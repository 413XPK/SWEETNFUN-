import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './styles';

import first from '../../imgs/banners/1.jpg';
import second from '../../imgs/banners/2.jpg';
import third from '../../imgs/banners/3.jpg';

export default () => (
  <Carousel
    // autoPlay
    // infiniteLoop
    showThumbs={false}
    showStatus={false}
    renderIndicator={(onClickHandler, isSelected, index, label) => {
      const defStyle = { marginLeft: 20, color: 'grey', cursor: 'pointer' };
      const style = isSelected
        ? { ...defStyle, color: 'black' }
        : { ...defStyle };
      return (
        <span
          style={style}
          onClick={onClickHandler}
          onKeyDown={onClickHandler}
          value={index}
          key={index}
          role="button"
          tabIndex={0}
          aria-label={`${label} ${index + 1}`}
        >
          {index}
        </span>
      );
    }}
  >
    <div>
      <a className="first_blur"></a>
      <img src={first} className="initial" />
      {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
      <img src={second} className="secondary" />
      {/* <p className="legend">Legend 2</p> */}
    </div>
    <div>
      <img src={third} className="tertiary" />
      {/* <p className="legend">Legend 3</p> */}
    </div>
  </Carousel>
);
