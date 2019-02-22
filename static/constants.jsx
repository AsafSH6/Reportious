export const SET_REPORT = 'set_report';
export const UNSET_REPORT = 'unset_report';
export const EDIT_REPORT = 'edit_report';
export const CANCEL_EDIT_REPORT = 'cancel_edit_report';
export const UPDATE_DAY_START_HOUR = 'update_day_start_hour';
export const UPDATE_DAY_END_HOUR = 'update_day_end_hour';
export const UPDATE_DAY_AMOUNT = 'update_day_amount';
export const UPDATE_DRIVING_KM = 'update_driving_km';
export const UPDATE_REPORTS = 'update_reports';
export const SAVE_REPORT = 'save_report';
export const CREATE_REPORT = 'create_report';
export const UPDATE_OPTIONS = 'update_options';
export const LOGGED_IN = 'logged_in';
export const OPEN_SNACKBAR = 'open_snackbar';
export const CLOSE_SNACKBAR = 'close_snackbar';

export const allReportTypes = [
    {
        name: 'Coming Soon 1',
        type: 'coming-soon-1',
        img: '/static/images/backgroundpic.jpg'
    },
    {
        name: 'Working Hours Report',
        type: 'working-hours-report',
        img: '/static/images/backgroundpic.jpg'
    },
    {
        name: 'Coming Soon 2',
        type: 'coming-soon-2',
        img: '/static/images/backgroundpic.jpg'
    }
];

export const reports = {
    'working-hours-report': [...Array(10)].map((_ ,idx) => ({
            id: idx,
            name: `report ${idx}`,
            date: new Date(2018, idx, idx + 1),
            daysReport: [{
                day: 0,
                startHour: "",
                endHour: "17:00",
                amount: 1
            },
                ...[...Array(5)].map((_, idx) => ({
                    day: idx + 1,
                    startHour: "17:00",
                    endHour: "18:00",
                    amount: 2
            }))],
            drivingInKM: 10 * idx,
        })
    ).reverse(),
    'coming-soon-1': [],
    'coming-soon-2': [],
};