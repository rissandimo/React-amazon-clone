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