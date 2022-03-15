import React from 'react';

import styles from './About.module.scss';

const About: React.FC = () => (
  <div className={styles.component}>
    <h1 id="about-page-title">О проекте</h1>
    <p>Проект Foods позволяет ознакомится с различными катекориями еды.
      Реализован поиск по названиям категорий и добавлено различное отображение контента
    </p>
  </div>
);

export default About;
