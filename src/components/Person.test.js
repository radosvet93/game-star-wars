import React from 'react';
import { Person } from './Person';
import { mount } from 'enzyme';

describe('Person', () => {
    it('should render with props', () => {
        const myCharacter = { name: 'My Character', mass: '100' };
        const enemyCharacter = { name: 'Enemy Character', mass: '200' };

        const person = mount(<Person myCharacter={myCharacter} enemyCharacter={enemyCharacter} myResult={'win'} enemyResult={'lose'} />);

        expect(person.props().myCharacter).toMatchObject(myCharacter)
        expect(person.props().enemyCharacter).toMatchObject(enemyCharacter)
        expect(person.props().myResult).toBe('win')
        expect(person.props().enemyResult).toBe('lose')

    });
});