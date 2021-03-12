export const authAction = {

    authenticate(context, payload){
        let action = payload.type.split("/")[1];
        return context.commit({
            type: action,
            credentials: payload.credentials
        })
    }

};