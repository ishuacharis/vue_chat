export const authState = () => {
    return {
        user: JSON.parse(localStorage.getItem("VUE_CHAT_USER")) || null,
        token: JSON.parse(localStorage.getItem("VUE_CHAT_TOKEN")) || null
    }
}