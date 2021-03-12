<template>
    <form @submit="onSubmit">
        <slot />
        <div class="button">
            <button type="submit" class="btn btn-secondary">{{ isLastStep ? 'Submit' : 'Next'  }}</button>
        </div>
    </form>
</template>


<script>
import { useForm } from 'vee-validate';
import { ref, computed, } from 'vue';
import { injectWrapper } from '@/provideInject';
export default {
    name: 'FormWizard',
    emits: ["next", "submit"],
    props: {
        validationSchema: {
            type: null,
            required: true
        }
    },
    setup(props, {emit}) {

        const formData = ref({});
        
        const currentStepIdx = injectWrapper('CURRENT_STEP_INDEX');
        const stepCounter = injectWrapper('STEP_COUNTER');
        const updateCounter  = injectWrapper('UPDATE_COUNTER');
        const { resetForm, handleSubmit } = useForm({ validationSchema: props.validationSchema });

        const isLastStep = computed(() => {
            return currentStepIdx.value === stepCounter.value -  1;
        })
        const onSubmit = handleSubmit((values) => {
            formData.value = {
                ...formData.value,
                ...values,
            };

            resetForm({
                values: {
                    ...formData.value
                }
            })

            if(!isLastStep.value) {
                updateCounter();
                emit("next", formData.value);
                return;
            }
            emit("submit", formData.value);
        });


        return {
            onSubmit,isLastStep
        }
    }
}
</script>

<style>

</style>