import React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/Card';

it('renders the Card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
