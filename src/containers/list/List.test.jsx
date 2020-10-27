import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import List from './List';

import { getNameApi } from '../../services/getNameApi';

jest.mock('../../services/getNameApi.js');

describe('List container', () => {
  it('displays a list of characters', async () => {
    getNameApi.mockResolvedValue([
      { name: 'rick', image: 'www.url.com' },
      { name: 'morty', image: 'www.website.com' }
    ]);
    render(<List />);

    const characterList = await screen.findByTestId('characters');
    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });

  });
});
