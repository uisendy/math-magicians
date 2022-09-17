/* eslint-disable radix */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Calculator from '../calculator/Calculator';
import Home from '../pages/Home';
import Quotes from '../pages/Quotes';

afterEach(cleanup);

// Testing Calculator Component
it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Calculator display should equal to 0', () => {
  const { getByText } = render(<Calculator />);
  expect(getByText(/0/i)).toMatchSnapshot();
});
