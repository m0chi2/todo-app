import { render, screen } from '@testing-library/react';

import { ListItem } from './ListItem';

describe('Test_ListItem_OK', () => {
  describe('props', () => {
    describe('label', () => {
      test('have tesrms `test`', () => {
        render(<ListItem label="test" />);
        const listItem = screen.getByRole('listitem');
        expect(listItem).toHaveTextContent('test');
      });
    });

    describe('status', () => {
      describe('done', () => {
        test('have img element', () => {
          render(<ListItem status="done" />);
          const listItem = screen.getByRole('listitem');
          const icon = screen.getByRole('img');
          expect(listItem).toContainElement(icon);
        });
      });
      describe('others', () => {
        test('not have img element', () => {
          render(<ListItem status="others" />);
          const listItem = screen.getByRole('listitem');
          expect(listItem).not.toContainHTML('<img alt="" />');
        });
      });
    });
  });
});
