import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {
    ReportiousTitle,
    ReportiousLink
} from './ReportiousComponents';


const optionStyles = {
    card: {
        width: '20vw',
        height: '20vw',
        borderRadius: '50%',
    },
    media: {
        height: '15vw'
    },
    content: {
        textAlign: 'center'
    }
};


const ReportOption = withStyles(optionStyles)(({ classes, className, reportType }) => {
    return (
        <div className={className}>
            <ReportiousLink
                useButton={false}
                to={`/reports/${reportType.type}/`}
            >
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={reportType.img}
                        />
                        <CardContent
                            className={classes.content}
                        >
                            <Typography
                                variant="subtitle1"
                                color="secondary"
                            >
                                <strong>{reportType.name}</strong>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ReportiousLink>
        </div>
    )
});


const optionMenuStyles = theme => ({
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    options: {
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    option: {
        margin: theme.spacing.unit,
    }
});


class OptionsMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.updateOptions();
    }

    render() {
        const { classes, reportOptions } = this.props;
        return (
            <div className={classes.root}>
                <ReportiousTitle>
                    Options
                </ReportiousTitle>
                <div className={classes.options}>
                    {reportOptions.map(reportType => (
                        <ReportOption
                            key={reportType.name}
                            className={classes.option}
                            reportType={reportType}
                        />
                    ))}
                </div>
            </div>
        );
}}

OptionsMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(optionMenuStyles)(OptionsMenu);