import React from 'react';
import styles from './css/Blog.module.css';
import { useTranslation } from 'react-i18next';

const imageData = [
  {
    src: require('../assets/blog_1.webp'),
    key: 'concert',
    title: 'Concert',
    camera: 'Nikon D750',
    settings: '50mm • f/1.4 • 1/125s • ISO 800',
  },
  {
    src: require('../assets/blog_2.jpg'),
    key: 'newYears',
    title: 'New Years Eve',
    camera: 'Nikon D750',
    settings: '50mm • f/1.4 • 1/125s • ISO 1600',
  },
  {
    src: require('../assets/blog_3.jpeg'),
    key: 'solDuc',
    title: 'Sol Duc Falls',
    camera: 'Canon EOS 5DS R',
    settings: '70mm • f/11 • 1/4s • ISO 100',
  },
  {
    src: require('../assets/blog_4.jpg'),
    key: 'paris',
    title: 'Paris Findings',
    camera: 'Canon EOS 5D Mark IV',
    settings: '50mm • f/8 • 1/125s • ISO 200',
  },
  {
    src: require('../assets/blog_5.jpg'),
    key: 'swanLake',
    title: 'Swan Lake',
    camera: 'Canon EOS 5D Mark IV',
    settings: '50mm • f/8 • 1/125s • ISO 400',
  },
];


const Blog = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.blogContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>{t('pages.blog.title')}</h1>
        <span className={styles.year}>2023</span>
      </header>

      <div className={styles.gallery}>
        {imageData.map((item, index) => (
          <article key={index} className={styles.galleryItem}>
            <img src={item.src} alt={item.title} />

            <h3>{item.title}</h3>

            <div className={styles.cameraInfo}>
              <span>{item.camera}</span>
              <span>{item.settings}</span>
            </div>
          </article>

        ))}
      </div>
    </section>
  );
};

export default Blog;
