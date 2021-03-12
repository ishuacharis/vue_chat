
export const authMutation = {
    authenticate(state,payload){
        console.log(payload)
        state.user = payload.user,
        state.token = payload.token
    }
}