<template>
    <Fieldset class="p-mb-4" legend="Info">
        <div class="p-fluid">
            <div class="p-field">
                <label>Name</label>
                <InputText v-model="model.name"/>
            </div>
            <div class="p-field">
                <label>Description</label>
                <Textarea v-model="model.description" :autoResize="true" rows="5"/>
            </div>
        </div>
    </Fieldset>
    <Fieldset legend="Questions">
        <PollQuestion
            v-for="(question, index) in model.questions"
            ref="question"
            :key="index"
            :question="question"
            @delete="deleteQuestion(index)"
            @update="updateQuestion(index, $event)"
        />
        <Button icon="pi pi-save" label="Add Question" @click="addQuestion()" @focus="addQuestion()"/>
    </Fieldset>
</template>
<script>
import PollQuestion from '@/components/PollQuestion.vue';
import Fieldset from 'primevue/fieldset';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';

export default {
    name: 'PollForm',
    props: [
        'poll',
    ],
    data() {
        return {
            model: { ...this.poll },
        };
    },
    watch: {
        model: {
            deep: true,
            handler(model) {
                this.$emit('update', model);
            },
        },
    },
    methods: {
        addQuestion() {
            this.model.questions.push({});

            this.$nextTick(() => {
                this.$refs.question.focus();
            });
        },
        deleteQuestion(index) {
            this.model.questions = this.model.questions.filter((question, i) => i !== index);
        },
        updateQuestion(index, question) {
            this.model.questions[index] = question;
        },
    },
    emits: [
        'update',
    ],
    components: {
        PollQuestion,
        Fieldset,
        InputText,
        Button,
        Textarea,
    },
};
</script>
