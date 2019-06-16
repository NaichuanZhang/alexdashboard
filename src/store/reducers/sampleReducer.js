
const sampleReducer = (state={}, action) => {
    switch (action.type) {
        case 'SAMPLE_ACTION':
            console.log('msg from action', action.msg);
            return {
                ...state,
                samples: 'success'
            }
        default:
            return state;
    }
}

export default sampleReducer;