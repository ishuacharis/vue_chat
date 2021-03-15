import * as yup from "yup";


export const validationSchema = yup.object().shape({
    phoneNo: yup.string().required().label('Phone no'),
    displayName: yup.string().required().label('Display name'),
    about: yup.string().required().label('About me')
});

export const addUserSchema = yup.object().shape({
    phoneNo: yup.string().required().label('Phone no'),
});