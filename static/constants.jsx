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