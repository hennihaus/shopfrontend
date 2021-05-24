export const updateState = (state, payload) => {
    return {
        ...state,
        ...payload
    };
};

export const isLoggedIn = () => window.localStorage.getItem('expiration') && +window.localStorage.getItem('expiration') >= new Date().getTime();

export const convertToDate = dateString => {
    const [date, month, year] = dateString.split('.');
    return new Date(year, month, date);
};

export const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
