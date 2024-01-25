export const loggedIn=()=>{
    return {
        type:'LOGGED_IN',
    }
}

export const loggedOut=()=>{
    return {
        type:'LOGGED_OUT',
    }
}

export const teamRegistered=(teamName)=>{
    return {
        type:'TEAM_REGISTERED',
        payload:teamName,
    }
}