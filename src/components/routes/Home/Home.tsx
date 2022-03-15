import React, { useEffect, useState } from 'react';

import classes from './Home.module.scss';
import Categories from '../../Categories';
import { CategoryType } from '../../../data/foodCategories';
import Loading from '../../ui/Loading';
import Error from '../../ui/Error';
import ControlSideBar from '../../ui/ControlSideBar';

const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const Home: React.FC = () => {
  const [foodCategories, setFoodCategories] = useState<CategoryType[]>([]);

  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [showCards, setShowCards] = useState(false);

  const inputSearchHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };
  const showCardsHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShowCards(!showCards);
  };

  useEffect(() => {
    fetch(url).then((response) => {
      setIsLoading(true);
      return response.json();
    }).then((foodData) => {
      setIsLoading(false);
      setFoodCategories(foodData.categories);
    }).catch((error) => {
      setIsLoading(false);
      setErrorMessage(error.message);
    });
  }, []);

  return (
    <main className={classes.component}>
      <ControlSideBar buttonViewToggler={showCards ? 'списка' : 'карточек'} clickHandler={showCardsHandler} inputValue={searchValue} inputHandler={inputSearchHandler} inputPlaceholder="Начните вводить строку..." />
      <Categories className={showCards && classes.grid} data={foodCategories} search={searchValue} />
      {isLoading && <Loading />}
      {errorMessage && <Error errorMessage={errorMessage} />}
    </main>
  );
};

export default Home;
