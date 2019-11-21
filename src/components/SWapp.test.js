import React from 'react';
import SWapp from './SWapp';
import { Score } from './Score';
import { Person } from './Person';
import { Starship } from './Starship';
import { shallow, mount } from 'enzyme';

describe('SWapp', () => {
    let swapp;

    beforeAll(() => {
        swapp = shallow(<SWapp />)
    });

    it('clearState should return empty objects', () => {

        /* Init state */
        const myCharacter = { name: 'My Character', mass: '93' };
        const enemyCharacter = { name: 'Enemy Character', mass: '91' };
        const myStarship = { name: 'My Starship', crew: '50' };
        const enemyStarship = { name: 'Enemy Starship', crew: '91' };

        /* Set state */
        swapp.setState({
            myCharacter,
            enemyCharacter,
            myStarship,
            enemyStarship
        })

        /* Expect to match the state */
        expect(swapp.instance().state.myCharacter).toMatchObject(myCharacter)
        expect(swapp.instance().state.enemyCharacter).toMatchObject(enemyCharacter)
        expect(swapp.instance().state.myStarship).toMatchObject(myStarship)
        expect(swapp.instance().state.enemyStarship).toMatchObject(enemyStarship)

        /* Clear state */
        swapp.instance().clearState();

        /* Check if is cleared */
        expect(swapp.instance().state.myCharacter).toMatchObject({});
        expect(swapp.instance().state.enemyCharacter).toMatchObject({});
        expect(swapp.instance().state.myStarship).toMatchObject({});
        expect(swapp.instance().state.enemyStarship).toMatchObject({});
    });


    describe('checkWinner', () => {

        afterEach(() => {
            /* Clear state */
            swapp.setState({
                myScore: 0,
                enemyScore: 0,
                myResult: '',
                enemyResult: ''
            })
        });

        it('should my character win', () => {

            swapp.instance().checkWinner(2, 1)

            expect(swapp.instance().state.myScore).toBe(1);
            expect(swapp.instance().state.enemyScore).toBe(0);
            expect(swapp.instance().state.myResult).toBe('win');
            expect(swapp.instance().state.enemyResult).toBe('lose');

        })

        it('should enemy character win', () => {
            swapp.instance().checkWinner(1, 2)

            expect(swapp.instance().state.myScore).toBe(0);
            expect(swapp.instance().state.enemyScore).toBe(1);
            expect(swapp.instance().state.myResult).toBe('lose');
            expect(swapp.instance().state.enemyResult).toBe('win');
        })

        it('should be draw', () => {
            swapp.instance().checkWinner(1, 1)

            expect(swapp.instance().state.myScore).toBe(0);
            expect(swapp.instance().state.enemyScore).toBe(0);
            expect(swapp.instance().state.myResult).toBe('draw');
            expect(swapp.instance().state.enemyResult).toBe('draw');
        })
    })

    describe('should render', ()=>{
        it('Score', ()=>{
            swapp.setState({
                apiAvailable: true
            })

            expect(swapp.find(Score)).toHaveLength(1)
        })

        it('Person', ()=>{
            swapp.setState({
                apiAvailable: true,
                myCharacter: {name: 'Character'}
            })

            expect(swapp.find(Person)).toHaveLength(1)
        })

        it('Starship', ()=>{
            swapp.setState({
                apiAvailable: true,
                myStarship: {name: 'Starship'}
            })

            expect(swapp.find(Starship)).toHaveLength(1)
        })
    })

});