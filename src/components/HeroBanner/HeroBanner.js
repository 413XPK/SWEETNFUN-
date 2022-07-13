import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import useStyles from './HeroBannerStyles';

import button from '../../imgs/button.png';
import first from '../../imgs/banners/1-1.jpg';
import logo from '../../imgs/logo_2.png';
import second from '../../imgs/banners/2.jpg';
import third from '../../imgs/banners/3.jpg';

const HeroBanner = () => {
  const styles = useStyles();

  return (
    <Carousel
      // autoPlay
      // infiniteLoop
      showThumbs={false}
      showStatus={false}
      // transitionTime={3000}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = {
          marginLeft: 20,
          color: 'darkGrey',
          cursor: 'pointer',
        };
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
      <div className={(styles.first_container, styles.fix_top)}>
        <div className={styles.first_blur}></div>
        <img src={logo} className={styles.first_logo} />

        <div className={styles.first_words}>Make life Sweet and Fun</div>
        <a className={styles.button_container}>
          <div className={styles.button_inside}>Browse now</div>
          <img src={button} classname={styles.button} />
        </a>

        <img src={first} className={styles.initial} />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div className={styles.fix_top}>
        <img src={second} className={styles.secondary} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div className={styles.fix_top}>
        <img src={third} className={styles.tertiary} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default HeroBanner;
