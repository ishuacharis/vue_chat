
export const authMutation = {
    authenticate(state,paylod){
        state.user = paylod.credentials.user,
        state.token = paylod.crentials.token
    }
}