<template>
    <div class="auth">
        <div class="auth-header">
            <div>
                <i class='bx bx-chevron-left' @click="goToPrev" v-if="hasPrevious"></i>
            </div>
        </div>
        <FormWizard :validation-schema="validationSchema" @submit="onSubmit">
            <FormStep>
                <Field name="phoneNo" type="text" class="input" placeholder="Phone number" />
                <ErrorMessage name="phoneNo" />
            </FormStep>
            <FormStep>
                <Field name="displayName" type="text" class="input" placeholder="Display name" />
                <ErrorMessage name="displayName" />
            </FormStep>
            <FormStep>
                <Field name="about" as="textarea" class="input" placeholder="About me" />
                <ErrorMessage name="about" />
            </FormStep>
        </FormWizard>
    
            
        <!-- <div class="tab" ref="tab">
            <div class="field">
                <textarea cols="1" rows="1">About</textarea>
                <span class="character-left">0/100</span>
            </div>
        </div> -->


    </div>
</template>

<script>
    import { ref , computed } from 'vue';
    import { useRouter } from 'vue-router';
    import {provideWrapper} from '@/provideInject';
    import { validationSchema } from '@/schema';
    import FormStep from '@/components/FormStep.vue';
    import FormWizard from '@/components/FormWizard.vue';
    import { Field, ErrorMessage } from 'vee-validate';
    import { register } from '@/routes';
    import { useStore } from 'vuex';
    import { auth } from '@/store/auth/actions/action_creators';

    export default {
        name: 'Register',
        components: {FormStep, FormWizard,Field,ErrorMessage},
        setup() {
            const currentStepIdx = ref(0);
            const stepCounter =  ref(0);
            const router  = useRouter();
            const store  = useStore();
            const onSubmit = async (formData) => {
                const data = {
                    username: formData.displayName,
                    phone_no: formData.phoneNo,
                    about: formData.about
                }
                const args = {
                    endPoint: "register",
                    method: "POST",
                    body: data
                }
                try {
                    
                    const {user, token}  = await register(args);
                    console.log(user)
                    if(user && token){
                        localStorage.setItem("VUE_CHAT_USER", JSON.stringify(user));
                        localStorage.setItem("VUE_CHAT_TOKEN", JSON.stringify(token));
                        store.dispatch(auth({user,token}));
                        router.replace("/chats");
                    }
                    
                } catch (e) {
                    console.log(e.message)
                }
            }

            const updateCounter = () => {
                currentStepIdx.value++;
                console.log(currentStepIdx.value)
            }
            const goToPrev = () => {
                if(currentStepIdx.value === 0) {
                    return;
                }
                currentStepIdx.value--;
            }
            const hasPrevious =  computed(() => {
                return currentStepIdx.value > 0;
            });
            provideWrapper("STEP_COUNTER", stepCounter);
            provideWrapper("CURRENT_STEP_INDEX", currentStepIdx);
    
            provideWrapper("UPDATE_COUNTER", updateCounter);
            return{
                validationSchema, onSubmit, goToPrev, hasPrevious
            }
        }
    }
</script>
<style src="./Auth.css">

</style>