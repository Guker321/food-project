import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Компонент Header', () => {
  it('должен содержать заголовок Foods', () => {
    const { getByText } = render(<Header />, { wrapper: MemoryRouter });
    expect(getByText(/foods/i)).toBeInTheDocument();
  });
  it('должен содержать ссылки на другие страницы', () => {
    const { container } = render(<Header />, { wrapper: MemoryRouter });
    expect(container.querySelector('a')).toBeInTheDocument();
  });
  it('должен содержать две или более ссылок', () => {
    const { container } = render(<Header />, { wrapper: MemoryRouter });
    const nodeList = container.querySelectorAll('a');
    expect(nodeList.length).toBeGreaterThanOrEqual(2);
  });
});
