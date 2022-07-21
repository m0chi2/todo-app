import { render, screen } from '@testing-library/react';

import { Card } from './Card';

describe('Test_Card_OK', () => {
  test('render children', () => {
    render(<Card>test</Card>);
    const card = screen.getByText('test');
    expect(card).toBeInTheDocument();
  });
});
