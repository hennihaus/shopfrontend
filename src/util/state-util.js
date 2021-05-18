export const updateState = (state, payload) => {
    return {
        ...state,
        ...payload
    };
};

export const convertToDate = dateString => {
    const [date, month, year] = dateString.split('.');
    return new Date(year, month, date);
}
