<template>
    <div v-if="shouldShow">
        <div class="field">
            <slot />
        </div>
    </div>
</template>

<script>
import {computed,} from 'vue';
import { injectWrapper } from '@/provideInject';
export default {
    name: 'FormStep', 

    setup() {
        const currentIdx = injectWrapper("STEP_COUNTER").value++;
        const formStepIdx = injectWrapper("CURRENT_STEP_INDEX");

        const shouldShow = computed(() => {
            return currentIdx === formStepIdx.value;
        });

        return {
            shouldShow
        }
    }
}
</script>