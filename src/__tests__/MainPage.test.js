import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../components/MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: ''
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('render the MainPage component', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters the robots correctly', () => {
  expect(wrapper.instance().filteredRobots([])).toEqual([]);
});

it('filters the robots correctly 2', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'Bes',
        email: 'besjan.sejrani@outlook.com'
      }
    ],
    searchField: 'bes'
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filteredRobots([])).toEqual([
    {
      id: 3,
      name: 'Bes',
      email: 'besjan.sejrani@outlook.com'
    }
  ]);
});

it('filters the robots correctly 3', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'a',
        email: 'besjan.sejrani@outlook.com'
      }
    ],
    searchField: 'bes'
  };

  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);

  expect(wrapper3.instance().filteredRobots([])).toEqual(filteredRobots);
});
