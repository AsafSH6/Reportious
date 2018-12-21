import React from 'react'
import Button from '@material-ui/core/Button';


export default ({ children, ...passThroughProps }) => (
    <Button
        variant='outlined'
        color='primary'
        {...passThroughProps}
    >
        {children}
    </Button>
);
