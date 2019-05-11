import React from 'react';

const Education = (props) => {
    const { item, key } = props;

    return (
        <React.Fragment>
            <div className="item" key={key}>
                <h4 className="degree">{item.degree}</h4>
                <h5 className="meta">{item.schoolName}</h5>
                <div className="time">{item.period}</div>
            </div>
        </React.Fragment>
    )
}

export default Education;