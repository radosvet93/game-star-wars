import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './Card';

export const Starship = (props) => {
    return (
        <div className="row mt-4">
            <div className="col">
                <Card myResult={props.myResult} title={props.myStarship.name} attr={'Crew'} badge={props.myStarship.crew} />
            </div>
            <div className="col">
                <Card enemyResult={props.enemyResult} title={props.enemyStarship.name} attr={'Crew'} badge={props.enemyStarship.crew} />
            </div>
        </div>
    )
}

Starship.propTypes = {
    myResult: PropTypes.string,
    enemyResult: PropTypes.string,
    myStarship: PropTypes.object,
    enemyStarship: PropTypes.object,
};