const initialState = {
    titles: ['title1','title2','title3'],
    curIndex: 0
}

export default (state=initialState, action) => {
    switch(action.type) {
        case 'TAB':
            return {
                ...state,
                curIndex: action.index
            };
        default:
            return state;
    }
}