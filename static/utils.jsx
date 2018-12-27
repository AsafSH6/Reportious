import moment from "moment/moment";

moment.locale('he');

const toFormattedDate = date => (
    moment(date).format('MMMM YYYY')
);

export default toFormattedDate;
