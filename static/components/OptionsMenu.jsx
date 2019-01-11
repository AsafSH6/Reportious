import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {
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


@withStyles(optionStyles)
class ReportOption extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, reportType, ...passThroughProps } = this.props;

        return (
            <div {...passThroughProps}>
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
    }
}


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
            <div className={ClassNames(classes.root)}>
                <div className={classes.options}>
                    {reportOptions.map((reportType, idx) => (
                        <ReportOption
                            key={reportType.name}
                            className={ClassNames(classes.option, 'animated zoomIn')}
                            style={{
                                animationDelay: `${1 + idx * 0.5}s`
                            }}
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