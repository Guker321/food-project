import React from 'react';

import classes from './Search.module.scss';

export type SearchProps = {
  inputValue: string;
  inputHandler: React.ChangeEventHandler<HTMLInputElement>;
  inputPlaceholder?: string;
};

const Search: React.FC<SearchProps> = (props) => {
  const { inputValue, inputHandler, inputPlaceholder = 'Поиск...' } = props;
  return (
    <input className={classes.component} type="text" value={inputValue} onChange={inputHandler} placeholder={inputPlaceholder} />
  );
};

export default Search;
