import React from 'react';
import { render, screen } from '@testing-library/react';

import Categories from '../Categories';
import foodCategories from '../../../data/foodCategories';

describe('Компонент Categories', () => {
  it('должна отобразится отобразится строка с текстом Chicken', () => {
    render(<Categories data={foodCategories} />);
    expect(screen.getByText('Chicken')).toBeInTheDocument();
  });
  it('должна отобразится отобразится строка с текстом Dessert', () => {
    render(<Categories data={foodCategories} />);
    expect(screen.getByText('Dessert')).toBeInTheDocument();
  });
});
