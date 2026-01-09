import React from 'react';
import styles from './css/About.module.css';
import { useTranslation } from 'react-i18next';

const sections = [
  {
    img: require('../assets/girlboss_stock1.webp'),
    textKey: 'pages.about.trio',
  },
  {
    img: require('../assets/photography_stock3.jpeg'),
    textKey: 'pages.about.vision',
  },
  {
    img: require('../assets/photography_stock_img2.jpeg'),
    textKey: 'pages.about.humbleBeginnings',
  },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutContainer}>
      <h1 className={styles.title}>{t('pages.about.ourStory')}</h1>

      {sections.map((section, index) => (
        <div
          key={index}
          className={`${styles.row} ${
            index % 2 !== 0 ? styles.reverse : ''
          }`}
        >
          <div className={styles.imageWrapper}>
            <img src={section.img} alt="" />
          </div>

          <div className={styles.textWrapper}>
            <p>{t(section.textKey)}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
