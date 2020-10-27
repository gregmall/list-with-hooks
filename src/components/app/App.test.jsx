import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { getNameApi } from '../../services/getNameApi';

jest.mock('../../services/getNameApi.js');

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    getNameApi.mockResolvedValue([
      { name: 'morty', image: 'www.url.com' }, { name: 'mike', image: 'www.page.com' }]);
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
