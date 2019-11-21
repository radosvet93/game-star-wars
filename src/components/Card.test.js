import React from 'react';
import { Card } from './Card';
import { mount } from 'enzyme';

describe('Card', () => {

    it('should have class card', () => {
        const card = mount(<Card />)
        expect(card.find('.card')).toHaveLength(1)
    });

    it('should render success card style', () => {
        const card = mount(<Card myResult={'win'} />)

        expect(card.find('.card').hasClass('border-success')).toBeTruthy()
    });

    it('should render danger card style', () => {
        const card = mount(<Card myResult={'lose'} />)

        expect(card.find('.card').hasClass('border-danger')).toBeTruthy()
    });

    it('should render primary card style', () => {
        const card = mount(<Card myResult={'draw'} />)

        expect(card.find('.card').hasClass('border-primary')).toBeTruthy()
    });
});