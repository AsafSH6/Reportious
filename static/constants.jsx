export const UPDATE_REPORTS = 'update_reports';
export const SAVE_REPORT = 'create_report';
export const ADD_REPORT = 'add_report';
export const UPDATE_OPTIONS = 'update_options';
export const LOGGED_IN = 'logged_in';

export const allReportTypes = [
    {
        name: 'Coming Soon 1',
        type: 'coming-soon-1',
        img: '/images/backgroundpic.jpg'
    },
    {
        name: 'Working Hours Report',
        type: 'working-hours-report',
        img: '/images/backgroundpic.jpg'
    },
    {
        name: 'Coming Soon 2',
        type: 'coming-soon-2',
        img: '/images/backgroundpic.jpg'
    }
];

export const reports = {
    'working-hours-report': [...Array(6)].map((_ ,idx) => ({
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
    ),
    'coming-soon-1': [],
    'coming-soon-2': [],
};