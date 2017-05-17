import React from 'react';
import Paragraph from 'grommet/components/Paragraph';

const StyledParagraph = (props) => {
    return (
        <Paragraph style={styles.paragraphStyle} margin="small">
            { props.children }
        </Paragraph>
    )
};

const styles = {
    paragraphStyle: {
        textAlign: 'justify'
    }
};

export default StyledParagraph;