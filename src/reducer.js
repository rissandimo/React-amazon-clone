// Data layer logic

export const initialState = {
    basket: []
};

// event 
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return { 
                ...state,
                basket: [...state.basket, action.item]
             }
        case 'REMOVE_FROM_BASKET':
            return { state }
        default:
            return state;   
    }
}

export default reducer;