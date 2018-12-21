import React from 'react'
import Typography from '@material-ui/core/Typography';


export default ({ children, ...passThroughProps }) => (
    <Typography
        variant='h5'
        color='primary'
        {...passThroughProps}
    >
        {children}
    </Typography>
);
