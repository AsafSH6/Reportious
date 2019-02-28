import React from 'react'
import Button from '@material-ui/core/Button';


export default ({ children, ...passThroughProps }) => (
    <Button
        variant='contained'
        color='primary'
        style={{fontFamily: 'Roboto, Helvetica Neue, Helvetica, Arial,sans-serif', fontWeight: 400}}
        {...passThroughProps}
    >
        {children}
    </Button>
);
