const Initialtoken={
    isLoggedIn:false,
}
export const loggedinReducer=(state=Initialtoken,action)=>
{
    switch(action.type)
    {
        case 'LOGGED_IN':return {
            ...state,
            isLoggedIn:true,
        }

        case 'LOGGED_OUT':return {
            ...state,
            isLoggedIn:false,
        }
        default: return state
    }
}