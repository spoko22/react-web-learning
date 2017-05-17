import React from 'react';

const List = (props) => {
    return (
        <ul style={styles.list}>
            {props.children}
        </ul>
    );
};

const styles = {
    list: {
        marginTop: 10
    }
}

export default List;