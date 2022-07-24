import React from 'react';
import { render ,screen} from '@testing-library/react';
import AsteriodDetail from '../AsteroidDetail';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => ({ navigate: jest.fn() }),
 useLocation: () => ({  }),

}));

const route = {
    params: {
      id: "testid"
    }
  }
it('CheckBUtton',()=>{
    render(<AsteriodDetail route={route}/>);
    expect(screen).toMatchSnapshot();
    
});
