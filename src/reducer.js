// Data layer logic

export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

// event 
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return { 
                ...state,
                basket: [...state.basket, action.item]
             };
        case 'REMOVE_FROM_BASKET':

            //  copy current basket items
            let newBasket = [...state.basket];

            // traverse basket - check every item for id clicked
            const indexToDelete = state.basket.findIndex((currentId) => currentId.id === action.id);

            // item exists in basket -> remove it
            if(indexToDelete >= 0){
                newBasket.splice(indexToDelete, 1);
            }else{
                console.warn(`item with id: ${indexToDelete} does not exist`);
            }
            return { ...state, basket: newBasket };
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
         }
        default:
            return state;   
    }
}

export default reducer;