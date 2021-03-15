<template>
    <div class="add-user">
        <Form @submit="handleSubmit" :validation-schema="addUserSchema">
            <div>
                <Field name="phoneNo" type="text" class="input" placeholder="Phone number" />
                <ErrorMessage name="phoneNo" />
            </div>
            <div class="button">
                <button type="submit" class="btn btn-secondary">Submit</button>
            </div>
        </Form>
    </div>
</template>

<script>
import {  Field, Form , ErrorMessage} from 'vee-validate';
import { addUserSchema } from "@/schema";
import { addUser } from "@/routes";
import { useRouter } from 'vue-router';
import { getUser } from '@/helpers';

export default {
    name: "AddUser",
    components: { Field, Form, ErrorMessage },

    setup() {
        const router = useRouter();
        const user  = getUser();
        const handleSubmit = async (values, {resetForm}) => {
            const data = {
                username: values.phoneNo,
                user: user
            }
            const args = {
                endPoint: "adduser",
                method: "POST",
                body: data
            }
            try {
                
                const { doc }  = await addUser(args);
            
                if(!doc) {
                   console.error({
                        "error": "Unknown error"
                    }) 
                }
                resetForm()
                router.replace("/chats");
            } catch (e) {
                console.error({
                    "server": e.message
                })
            }

        }
        return{
            addUserSchema, handleSubmit
        }
    }
}
</script>

<style src="./AddUser.css">

</style>