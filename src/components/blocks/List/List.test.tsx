import { render, screen } from '@testing-library/react';

import { List } from './List';

describe('Test_List_OK', () => {
  test('render children', () => {
    render(<List>test</List>);
    const list = screen.getByText('test');
    expect(list).toBeInTheDocument();
  });
});
