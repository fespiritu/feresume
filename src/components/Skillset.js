import React from 'react';

const Skillset = (props) => {
    const { item } = props;

    return (
        <React.Fragment>
            <div className="item">
                <h3 className="level-title">{item.name}</h3>
                <div className="progress level-bar">
                    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: `${item.percent}%`}} aria-valuenow={item.percent} aria-valuemin="0" aria-valuemax="100"></div>
                </div>                               
            </div>
        </React.Fragment>
    )
}

export default Skillset;