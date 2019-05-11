import React from 'react';

const Language = (props) => {
    const { item } = props;

    return (
        <React.Fragment>
            <li>{item.name} <span className="lang-desc">({item.level})</span></li>
        </React.Fragment>
    )
}

export default Language;