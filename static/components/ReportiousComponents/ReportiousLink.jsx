import React from 'react'
import { Link } from 'react-router-dom';
import ReportiousButton from './ReportiousButton.jsx';


export default ({ to, children, linkPassThroughProps = {}, buttonPassThroughProps = {} }) => (
    <Link
        to={to}
        {...linkPassThroughProps}
    >
        <ReportiousButton
            {...buttonPassThroughProps}
        >
            {children}
        </ReportiousButton>
    </Link>
);