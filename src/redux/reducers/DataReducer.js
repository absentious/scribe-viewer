

export default (state = null, action) => {
    switch (action.type) {
        case 'get_data':
            console.log(action);
            return action.payload;
        default:
            return state;
    }
};
