import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Detail from './Detail';
import { getById } from '../../services/getById';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../services/getById.js');

describe('Detail container', () => {
   it('displays selected character', async () => {
     getById.mockResolvedValue({
       name: 'Morty',
       image: 'www.someurl.com',
       status: 'alive',
       gender: 'male',
       created: '6/6/66'
     });


     render(
        <MemoryRouter  initialEntries={['/detail/1']}>
            <Route path="/detail/:id" component={Detail}/>
        </MemoryRouter>
     );

     const detail = await screen.findByTestId('detail');
     return waitFor(() => {
       expect(detail).toHaveTextContent('Morty')
     });
   });
 });

