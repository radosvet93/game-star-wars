import React from 'react'
import PropTypes from 'prop-types'

export const Score = props => {
    return (
        <div className="score">
            <div className="row d-flex justify-content-center">
                <h3>Score</h3>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <p>My Score: {props.myScore}</p>
                </div>
                <div className="col d-flex justify-content-center">
                    <p>Enemy Score: {props.enemyScore}</p>
                </div>
            </div>
        </div>
    )
}

Score.propTypes = {
    myScore: PropTypes.number,
    enemyScore: PropTypes.number,
}
