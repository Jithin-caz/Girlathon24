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

const initialTeamStatus={
    registeredTeamName:null,
}

export const TeamRegisteredReducer=(state=initialTeamStatus,action)=>
{
    switch(action.type)
    {
        case 'TEAM_REGISTERED':return {
            ...state,
            registeredTeamName:action.payload
        }
        default: return state
    }
}