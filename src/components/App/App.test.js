import React from 'react';
import { render, screen } from '@testing-library/react';
import { getInitialState } from '../../features/number/numberSlice';
import App from './App';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore([])
const store = mockStore({ number: getInitialState() })

describe('<App />', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })

  afterEach(() => {
    store.clearActions();
  })

  test('Display 144 Buttons', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(144);
  });

  test('Check action for the click of button 6', () => {
    userEvent.click(screen.getByText("6"));
    expect(store.getActions()).toEqual([{ type: 'number/buttonClicked', payload: 6 }]);
  })

})


