import { authState } from './auth_state';
import { authAction } from './auth_action';
import { authGetter } from './auth_getter';
import { authMutation } from './auth_mutation';

const authModule = {
    namespaced: true,
    state: authState,
    getters: authGetter,
    actions: authAction,
    mutations: authMutation
};

export default authModule;