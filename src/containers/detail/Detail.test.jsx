import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Detail from './Detail';
import { getById } from '../../services/getById';

jest.mock('../../services/getById.js');

describe('Detail container', () => {
  it('displays selected character', async () => {
    getById.mockResolvedValue({
      'name': 'Morty',
      'image': 'www.someurl.com',
      'status': 'alive',
      'gender': 'male',
      'created': '6/6/66'
    });
    render(<Detail />);

    const detail = await screen.findByTestId('detail');
    return waitFor(() => {
      expect(detail).toHaveTextContent('Morty');
    });
  });
});
