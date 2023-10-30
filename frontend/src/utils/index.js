import dayjs from 'dayjs';

const dateFormat = 'YYYY-MM-DD';

const formatDate = (date) => {
    return dayjs(date,dateFormat).toISOString();
}

const formatNumber = (number = 0) => {
    return parseInt(number)?.toLocaleString();
}

export {
    formatDate,
    formatNumber
}