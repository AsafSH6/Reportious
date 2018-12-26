export const allReportTypes = [
    {
        name: 'Working Hours Report',
        type: 'working-hours-report',
        img: '/images/backgroundpic.jpg'
    },
    {
        name: 'Other report',
        type: 'other-report',
        img: '/images/backgroundpic.jpg'
    },
    {
        name: 'Other report2',
        type: 'other-report2',
        img: '/images/backgroundpic.jpg'
    }
];


export const reportTypeToPreview = {
    'working-hours-report': [
        {
            id: 1,
            name: 'report1',
            date: new Date(9, 5, 1995)
        },
        {
            id: 2,
            name: 'report2',
            date: new Date(10, 5, 1995)
        },
        {
            id: 3,
            name: 'report3',
            date: new Date(10, 5, 1995)
        },
        {
            id: 4,
            name: 'report4',
            date: new Date(10, 5, 1995)
        },
        {
            id: 5,
            name: 'report5',
            date: new Date(10, 5, 1995)
        },        {
            id: 6,
            name: 'report6',
            date: new Date(10, 5, 1995)
        }
    ],
    'other-report': [
        {
            id: 3,
            name: 'nothing',
            date: new Date()
        }
    ]
};


export const reports = {
    1: {
        date: new Date(9, 5, 1995),
        daysReport: {
            day: 1,
            startHour: "17:00",
            endHour: "18:00",
            Amount: 2
        },
        drivingInKM: 350
    }
}