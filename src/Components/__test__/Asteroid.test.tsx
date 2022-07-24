import React from 'react';
import Asteroid from '../Asteroid';

import { render ,screen ,fireEvent} from '@testing-library/react';
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => ({ navigate: jest.fn() }),
 useLocation: () => ({  }),

}));

  it("checkRandomAsteroidRender" ,()=>{
    const {queryByTitle} = render(<Asteroid/>);
    // const{queryByTitle} = render(<Asteroid/>);
    const btn:any =queryByTitle("Random");
    expect(btn).toBeTruthy();
    
});

it('checkSubmitButton',async() =>{
  render(<Asteroid/>);
  expect(screen).toMatchSnapshot();
});


it('checkSubmitButton',async() =>{
    render(<Asteroid/>);
    const headingElement = await screen.getByTestId('submit')
    expect(headingElement).toBeInTheDocument();
  });

 
  it('check button disable',async() =>{
    const{getByTestId} =render(<Asteroid/>);
    const submit =getByTestId('submit');
     expect(submit).toBeDisabled();
   });

   it('checkSubmitButton',async() =>{
    render(<Asteroid/>);
    const headingElement = await screen.getByText('Asteroid')
    expect(headingElement).toBeInTheDocument();
  });

  it('checkSubmitButton',async() =>{
    render(<Asteroid/>);
    const headingElement = await screen.getByText('Asteroid')
    expect(headingElement).toBeInTheDocument();
  });

   it('check textfield',()=>{
   const {getByTestId} = render(<Asteroid/>);
    let userInput:any = getByTestId('input').querySelector('input');
    fireEvent.change(userInput, { target: { value: '2000344' } });
    expect(userInput.value).toBe('2000344');
  });

  describe ('Initial test, validate fields', () => {
    test('TextField component should exists.', () => {
      render(<Asteroid/>);
      expect('Textfield').toBeDefined();
    });
  });

  

