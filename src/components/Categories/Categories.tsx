import React, { useEffect, useState } from 'react';

import classes from './Categories.module.scss';
import { CategoryType } from '../../data/foodCategories';
import Category from './Category';

type CategoriesProps = {
  data: CategoryType[];
  search?: string;
  className?: string | boolean;
};

const Categories: React.FC<CategoriesProps> = (props) => {
  const { data, search = '', className } = props;
  const [filtered, setFiltered] = useState(data);
  const [moreButtonIsVisible, setMoreButtonIsVisible] = useState(false);

  const showMoreHandler = () => {
    if (data.length === filtered.length) {
      setMoreButtonIsVisible(false);
    }
    setFiltered(data.slice(0, filtered.length + 3));
  };

  useEffect(() => {
    if (search.length > 2) {
      const filteredCategories = data.filter((category) => category.strCategory
        .toLowerCase().includes(search.toLowerCase()));
      setFiltered(filteredCategories);
      setMoreButtonIsVisible(false);
    } else {
      setFiltered(data.slice(0, 3));
    }
    return () => setMoreButtonIsVisible(true);
  }, [search, data]);

  return (
    <>
      <div className={`${classes.component} ${className}`}>
        {filtered && filtered.map((category: CategoryType) => <Category key={category.idCategory} {...category} />)}
      </div>
      {moreButtonIsVisible && <button type="button" className={classes.showMoreButton} onClick={showMoreHandler}>Показать больше</button>}
    </>
  );
};

export default Categories;
