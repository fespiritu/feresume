import React from 'react';
import PropTypes from 'prop-types';

const Experience = (props) => {
    const { item } = props;

    const renderDetails = () => {
        const details = [];
        // eslint-disable-next-line array-callback-return
        item.details.map((detItem, i) => {
            details.push(<p key={i}>{detItem.detail}</p>);
        });
        return details;
    };

    return (
        <React.Fragment>
            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">{item.title}</h3>
                        <div className="time">{item.period}</div>
                    </div>
                    <div className="company">{item.company}</div>
                </div>
                <div className="details">
                    {renderDetails()}
                </div>
            </div>
        </React.Fragment>
    )
};

Experience.propTypes = {
    item: PropTypes.shape().isRequired
}
export default Experience;
