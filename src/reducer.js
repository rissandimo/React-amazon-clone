// Data layer logic

export const initialState = {
    basket: [{
                id: "123451",
                title: 
                    "The Lean Startup: How Constant Innovation Creates",
                price: 10,
                rating: 4,
                image:
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLDGCIreAxtmYES-b0drzc9kxKX5KwHC37Y7tNeuJIxQXCl6TOkQMiDPzxgwnq2IpBrpKtQ8ED&usqp=CAc" 
             },
             {
                id: "123452",
                title: 
                    "The Lean Startup: How Constant Innovation Creates",
                price: 10,
                rating: 4,
                image:
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLDGCIreAxtmYES-b0drzc9kxKX5KwHC37Y7tNeuJIxQXCl6TOkQMiDPzxgwnq2IpBrpKtQ8ED&usqp=CAc" 
             }],
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
        default:
            return state;   
    }
}

export default reducer;