import React from 'react';
import { render } from '@testing-library/react';

import ControlSideBar from '../ControlSideBar';

const testId = 'testingControlSideBar';

type ControlSideBarProps = React.ComponentProps<typeof ControlSideBar>;

const renderComponent = (props: ControlSideBarProps) => render(
  <ControlSideBar
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ControlSideBar', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
