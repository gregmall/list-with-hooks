import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DetailDisplay from './DetailDisplay';

describe('DetailDisplay component', () => {
  afterAll(() => cleanup());
  
  it('displays DetailDisplay', () => {
    const character = {
      name: 'morty',
      image: 'www.placeholder.com',
      status: 'alive',
      gender: 'male',
      created: 'some date'
    }
    
    const { asFragment } = render(<DetailDisplay detail ={character}/>);
      expect(asFragment()).toMatchSnapshot();
      
  });
});

