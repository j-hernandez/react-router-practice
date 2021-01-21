import React from 'react';

import { Redirect } from 'react-router-dom';

export default (props) => {
    return !props.isLoggedIn ? <Redirect to='/' /> : (
        <>
        {props.children}
        </>
    )
}