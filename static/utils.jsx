import moment from "moment/moment";

moment.locale('he');

export const toFormattedDate = date => (
    moment(date).format('MMMM YYYY')
);


export const getHoursList = ({minHour = 8, maxHour = 19}) => {
    const totalHours = (maxHour - minHour) * 2;  // Multiple by 2 since we also add half hours.

    return [...Array(totalHours)].map((_, idx) => {
        let hour = String(8 + Math.floor(idx / 2));
        if (hour.length === 1) {
            hour = '0' + hour;
        }
        const minutes = (idx % 2) ? '30' : '00';
        return `${hour}:${minutes}`;
    })
};

export const getEmptyReport = () => ({
    date: new Date(),
    daysReport: [
        ...[...Array(31)].map((_, idx) => ({
            day: idx + 1,
            startHour: "",
            endHour: "",
            amount: ""
        }))],
    drivingInKM: 0,
});