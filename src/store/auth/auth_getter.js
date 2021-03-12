export const authGetter = {
    isAuthenticated(state){
        return state.user
    },
    token(state){
        return state.token
    }
}