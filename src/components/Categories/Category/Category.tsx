import React from 'react';

import classes from './Category.module.scss';

export type CategoryProps = {
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

const Category: React.FC<CategoryProps> = (props) => {
  const {
    strCategory, strCategoryThumb, strCategoryDescription,
  } = props;
  return (
    <li className={classes.component}>
      <h1>{strCategory}</h1>
      <img style={{ boxShadow: '0 2px 10px rgba(26, 26, 26, 0.16)' }} src={strCategoryThumb} alt={strCategory} />
      <p>{strCategoryDescription}</p>
    </li>
  );
};

export default Category;
