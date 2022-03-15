import React from 'react';
import { render, screen } from '@testing-library/react';

import Category from '../Category';

const CategoryProps = {
  idCategory: '1',
  strCategory: 'Beef',
  strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
  strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
};

describe('Компонент Category', () => {
  it('отображается без ошибок', () => {
    render(<Category {...CategoryProps} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('Beef')).toBeInTheDocument();
  });
  it('должна прийти корректная ссылка на картинку с категорией еды', () => {
    render(<Category {...CategoryProps} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://www.themealdb.com/images/category/beef.png');
  });
  it('элемент с картинкой должен иметь shadow box', () => {
    render(<Category {...CategoryProps} />);
    const img = screen.getByRole('img');
    expect(img).toHaveStyle('boxShadow: 0 2px 10px rgba(26, 26, 26, 0.16)');
  });
});
