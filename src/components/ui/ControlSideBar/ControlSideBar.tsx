import React from 'react';

import { SearchProps } from '../Search/Search';
import classes from './ControlSideBar.module.scss';
import Search from '../Search';

type ControlSideBarProps = {
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
  buttonViewToggler: string;
} & SearchProps;

const ControlSideBar: React.FC<ControlSideBarProps> = (props) => {
  const {
    inputValue, inputHandler, inputPlaceholder, clickHandler, buttonViewToggler = 'карточек',
  } = props;
  return (
    <div className={classes.component}>
      <Search inputValue={inputValue} inputHandler={inputHandler} inputPlaceholder={inputPlaceholder} />
      <button className={classes.viewButton} type="button" onClick={clickHandler}>Показать в форме {buttonViewToggler}</button>
    </div>
  );
};

export default ControlSideBar;
