import React from 'react'
import PropTypes from 'prop-types'
import { Card } from './Card';

export const Person = (props) => {
    return (
        <div className="row mt-4">
            <div className="col">
                <Card myResult={props.myResult} title={props.myCharacter.name} attr={'Mass'} badge={props.myCharacter.mass} />
            </div>

            <div className="col">
                <Card enemyResult={props.enemyResult} title={props.enemyCharacter.name} attr={'Mass'} badge={props.enemyCharacter.mass} />
            </div>
        </div>
    )
}

Person.propTypes = {
    myResult: PropTypes.string.isRequired,
    enemyResult: PropTypes.string.isRequired,
    myCharacter: PropTypes.object,
    enemyCharacter: PropTypes.object,
}