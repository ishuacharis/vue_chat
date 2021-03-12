import { AUTH } from './action_types';

export const auth = (credentials) => ({
    type: AUTH,
    credentials: credentials
});