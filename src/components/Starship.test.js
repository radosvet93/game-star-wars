import React from 'react';
import { Starship } from './Starship';
import { mount } from 'enzyme';

describe('Starship', () => {
    it('should render with props', () => {
        const myStarship = { name: 'My Starship', crew: '100' };
        const enemyStarship = { name: 'Enemy Starship', crew: '200' };

        const starship = mount(<Starship myStarship={myStarship} enemyStarship={enemyStarship} myResult='Win' enemyResult='Lose' />);

        expect(starship.props().myStarship).toMatchObject(myStarship)
        expect(starship.props().enemyStarship).toMatchObject(enemyStarship)
        expect(starship.props().myResult).toBe('Win')
        expect(starship.props().enemyResult).toBe('Lose')

    });

    
});