import React from 'react';
import styles from './styles.module.css';
import Marquee from 'react-fast-marquee';


export const Slider = ({ items }) => {
  return (
    <section className={styles.section}>
      <div className={styles.sliderContainer}>
        <Marquee autoFill pauseOnHover gradient>
          {items.map((item) => (
            <div className={styles.card} key={item.title}>
              <a
                className={styles.cardLink}
                href={item.source}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item.preview}
                  alt={item.title}
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.textBlock}>
                  <h2 className={styles.title}>{item.title}</h2>
                </div>
              </a>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Slider;
