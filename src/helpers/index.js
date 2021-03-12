import store from "../store"


export const isAuthenticated = () => {    
    return store.getters['auth/isAuthenticaed'] || false;
};

export const getToken = () => {
    
    return store.getters['auth/token'] ;
}