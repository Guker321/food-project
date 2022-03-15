import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from '../Search';

const testId = 'testingSearch';

type SearchProps = React.ComponentProps<typeof Search>;

const renderComponent = (props: SearchProps) => render(
  <Search
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Input', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
  it('должен отображатся с заполнителем', () => {
    const onChange = jest.fn();
    render(<Search inputValue="" inputHandler={onChange} />);
    expect(screen.getByPlaceholderText('Поиск...')).toBeInTheDocument();
  });
  it('должен отображатся с заполнителем переданным через props', () => {
    const onChange = jest.fn();
    render(<Search inputValue="" inputHandler={onChange} inputPlaceholder="Введите строку..." />);
    expect(screen.getByPlaceholderText('Введите строку...')).toBeInTheDocument();
  });
});
