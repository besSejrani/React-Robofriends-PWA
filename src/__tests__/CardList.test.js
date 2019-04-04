import React from 'react';
import { shallow } from 'enzyme';
import CardList from '../components/CardList';

it('render the CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Bes',
      username: 'besTheKiller',
      email: 'besjan.sejrani@outlook.fr'
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
