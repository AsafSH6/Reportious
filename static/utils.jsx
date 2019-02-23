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

export const getEmptyReport = (date = null) => ({
    date: date || new Date(),
    days: [
        ...[...Array(31)].map((_, idx) => ({
            number: idx + 1,
            startHour: "",
            endHour: "",
            amount: ""
        }))],
    drivingInKm: 0,
});

export const HOUR_IN_MILLISECONDS = 60 * 60 * 1000;

export const getTotalWorkingHours = report => {
    const reducer = (sum, day) => {
        const startHour = Date.parse(`01 Jan 1970 ${day.startHour}:00 GMT`);
        const endHour = Date.parse(`01 Jan 1970 ${day.endHour}:00 GMT`);
        if(startHour && endHour && endHour > startHour) {  // Invalid day report.
            const dayWorkingHours = endHour - startHour;
            return sum + dayWorkingHours;
        }
        else {
            return sum;
        }
    };

    return (report.days.reduce(reducer, 0) / HOUR_IN_MILLISECONDS);
};

export const MONTHS_LIST = moment.months();
export const YEAR_LIST = [...Array(4)].map((_, idx) => 2017 + idx);


export const dayToRegularCase = day => ({
    number: day.number,
    start_hour: day.startHour || day.start_hour || "",
    end_hour: day.endHour || day.end_hour || "",
    amount: day.amount
});

export const dayToCamelCase = day => ({
    number: day.number,
    startHour: day.start_hour || day.startHour || "",
    endHour: day.end_hour || day.endHour || "",
    amount: day.amount
});


export const downloadFile = (data, fileType, fileName) => {
    const bytes = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) {
        bytes[i] = data.charCodeAt(i);
    }

    const blob = new Blob([bytes], {type: fileType});
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();

    return true;
}