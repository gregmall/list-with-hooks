import React from 'react';
import { render } from '@testing-library/react';
import CharacterList from './CharactersList';

describe('List Component', () => {
  const characters = [{ name: 'rick', image: 'www.url.com' }, { name: 'morty', image: 'www.page.com' }];

  it('renders List component', () => {
    const { asFragment } = render(<CharacterList characters={characters} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
