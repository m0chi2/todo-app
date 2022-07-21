import { render, screen } from '@testing-library/react';

import { setup } from '../../UserEvent';
import { Button } from './Button';

describe('Test_Button_OK', () => {
  describe('props', () => {
    const onClick = jest.fn();

    describe('onClick', () => {
      test('be able to click', async () => {
        const { user } = setup(<Button onClick={onClick} />);
        const button = screen.getByRole('button');
        await user.click(button);
        expect(onClick).toHaveBeenCalled();
      });
    });

    describe('style', () => {
      test('have class `.test`', () => {
        render(<Button style="test" onClick={onClick} />);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('test');
      });
    });

    describe('icon', () => {
      test('have attr `img`', () => {
        render(<Button icon="test" onClick={onClick} />);
        const button = screen.getByRole('button');
        const icon = screen.getByRole('img');
        expect(button).toContainElement(icon);
      });
    });

    test('render children', () => {
      render(<Button onClick={onClick}>test</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('test');
    });
  });
});
