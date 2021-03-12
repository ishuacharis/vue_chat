import { isAuthenticated } from '../helpers'

export const authGuard = (to,from,next) => {
    if(to.matched.some(record =>  record.meta.requiresAuth )) {

        if(!isAuthenticated()) {

            next({
                path: "/register"
            })

        }else{
            next();
        }
    }else{
        next()
    }
}