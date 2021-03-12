
export const isAuthenticated = () => {   
    return JSON.parse(localStorage.getItem("VUE_CHAT_USER"))
};

export const getToken = () => {
    
    return JSON.parse(localStorage.getItem("VUE_CHAT_USER"));
}