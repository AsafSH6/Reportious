import React from 'react'
import { Link } from 'react-router-dom';
import ReportiousButton from './ReportiousButton.jsx';


export default ({ to, children, linkPassThroughProps = {style: {}}, buttonPassThroughProps = {}}) => {
    const linkProps = {
        ...linkPassThroughProps,
        style: {
            textDecoration: 'none',
            color: 'inherit',
            ...linkPassThroughProps.style
        }
    };

    return (
        <Link
            to={to}
            {...linkProps}
        >
            <ReportiousButton
                {...buttonPassThroughProps}
            >
                {children}
            </ReportiousButton>
        </Link>
)};