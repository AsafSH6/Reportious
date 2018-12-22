import React from 'react'
import { Link } from 'react-router-dom';
import ReportiousButton from './ReportiousButton.jsx';


export default ({ to, children, className, useButton = true, linkPassThroughProps = {style: {}}, buttonPassThroughProps = {}}) => {
    const Content = useButton ? ReportiousButton : React.Fragment;

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
            className={className}
            to={to}
            {...linkProps}
        >
            <Content
                {...buttonPassThroughProps}
            >
                {children}
            </Content>
        </Link>
)};