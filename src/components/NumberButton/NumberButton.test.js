import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NumberButton from './NumberButton';
import userEvent from '@testing-library/user-event'
import configureStore from 'redux-mock-store'
import { getInitialState } from '../../features/number/numberSlice';
import { Provider } from 'react-redux';

const mockStore = configureStore([])
const store = mockStore({ number: getInitialState() })


describe('<NumberButton />', () => {

  beforeEach(() => {
    render(
      <Provider store={store}>
        <NumberButton label={1} />
      </Provider>
    )
  })


  afterEach(() => {
    store.clearActions();
  })


  test('Render NumbeButton with 1 as innerHtml', () => {
    const numberButton = screen.getByRole("button");
    expect(numberButton).toHaveTextContent("1");
  });

  test('Check action for the click of button 1', () => {
    userEvent.click(screen.getByText("1"));
    expect(store.getActions()).toEqual([{ type: 'number/buttonClicked', payload: 1 }]);
  });

});