
export const isAuthenticated = () => {   
    return JSON.parse(localStorage.getItem("VUE_CHAT_USER"))
};

export const getToken = () => {
    
    return JSON.parse(localStorage.getItem("VUE_CHAT_USER"));
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem("VUE_CHAT_USER"))._id;
}