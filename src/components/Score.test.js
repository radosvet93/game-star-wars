import React from 'react';
import { Score } from './Score';
import { mount } from 'enzyme';

describe('Score', () => {
    it('should render number props', () => {
        const score = mount(<Score myScore={1} enemyScore={2} />);

        expect(score.props().myScore).toBe(1)
        expect(score.props().enemyScore).toBe(2)
    });
});