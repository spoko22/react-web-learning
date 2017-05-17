import React, { Component } from 'react';
import style from '../styles/ListItemStyle';

const ListItem = (props) => {
    return renderStyled(props);
}

const renderStyled = (props) => {
    if(props.light)
        return(
            <li style={style.light}>
                {props.children}
            </li>
        );
    else
        return(
            <li style={style.dark}>
                {props.children}
            </li>
        );
};

export default ListItem;