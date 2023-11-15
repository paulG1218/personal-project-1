const initialState = {
    userId: null,
    isAdmin: false,
    username: null,
    filterState: 'All'
}


const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case('authenticated'):
            console.log(`Admin: ${action.payload.isAdmin}`)
            return {
                ...state,
                userId: action.payload.userId,
                isAdmin: action.payload.isAdmin,
                username: action.payload.username
            }
        case('logout'): 
            return{
                ...state,
                userId: null,
                isAdmin: false
            }
        case 'filter':
            return {
                ...state,
                filterState: action.payload
            }
        default:
            return state
    }
}

export default loginReducer