import React from 'react';

const Interest = (props) => {
    const { item } = props;

    return (
        <React.Fragment>
            <li>{item.name}</li>
        </React.Fragment>
    )
}

export default Interest;