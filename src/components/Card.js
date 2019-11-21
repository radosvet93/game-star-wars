import React from 'react'
import PropTypes from 'prop-types'

export const Card = (props) => {
    let classVariant = '';
    let msg = '';

    if (props.myResult === 'win' || props.enemyResult === 'win') {
        classVariant = 'success';
        msg = 'Win';
    } else if (props.myResult === 'lose' || props.enemyResult === 'lose') {
        classVariant = 'danger';
        msg = 'Lose';
    } else {
        classVariant = 'primary';
        msg = 'Draw';
    }

    return (
        <div className={`card bg-transparent mb-3 border-${classVariant}`}>
            <div className={`card-header text-${classVariant} border-${classVariant}`}><h3>{props.title}</h3></div>
            <div className="card-body text-white">
                <h5 className="card-title">{props.attr} <span className={`badge badge-${classVariant}`}>{props.badge}</span></h5>
            </div>
            <div className={`card-footer border-${classVariant}`}>
                {msg}
            </div>
        </div>
    )
}
Card.propTypes = {
    myResult: PropTypes.string,
    enemyResult: PropTypes.string,
    title: PropTypes.string,
    attr: PropTypes.string,
    badge: PropTypes.string,
}

