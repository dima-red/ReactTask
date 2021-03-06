import React from 'react';

const timeOptions = {
    hour: '2-digit',
    minute:'2-digit',
    hour12: false
};

const FormattedTime = (props) => (
    <div>{ props.date.toLocaleTimeString("en-US", timeOptions) }</div>
);
 
export default FormattedTime;