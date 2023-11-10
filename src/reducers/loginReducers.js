const initialState = {
    userId: null,
    isAdmin: false
}


const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case('authenticated'):
        console.log(`Admin: ${action.payload.isAdmin}`)
        return {
            ...state,
            userId: action.payload.userId,
            isAdmin: action.payload.isAdmin
        }
        case('logout'): 
        return{
            ...state,
            userId: null,
            isAdmin: false
        }
        default:
            return state
    }
}

export default loginReducer