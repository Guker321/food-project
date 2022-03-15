import React from 'react';

import styles from './Error.module.scss';

type ErrorProps = {
  errorMessage?: string;
};

const Error: React.FC<ErrorProps> = (props) => (
  <p className={styles.component}>
    Ошибка при обращении за данными: {props.errorMessage}
  </p>
);

export default Error;
