import moment from 'moment';

const formatDate = (date) => {
    return moment(date).toISOString();
}

const formatNumber = (number = 0) => {
    return parseInt(number)?.toLocaleString();
}

export {
    formatDate,
    formatNumber
}