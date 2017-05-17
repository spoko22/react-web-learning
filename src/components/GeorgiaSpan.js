import React from 'react';

const GeorgiaSpan = (props) => {
    const style = {};
    let fontClass = 'georgia-font-bold';

    const {
        textTransform,
        slim,
        customText
    } = props;

    if(textTransform === 'uppercase' || textTransform === 'lowercase' || textTransform === 'capitalize')
        style['textTransform'] = textTransform;

    if(slim)
        fontClass = 'georgia-font';


    return (
        <span className={fontClass} style={ style }>{ customText || 'Instytut PL 590' }</span>
    );
};

export default GeorgiaSpan;