<template>
    <form @keyup.enter="updatePoll()">
        <Card class="p-mt-1" v-show="poll.loaded">
            <template #content>
                <Fieldset class="p-mb-4" legend="Info">
                    <div class="p-fluid">
                        <div class="p-field">
                            <label>Name</label>
                            <InputText placeholder="Name" v-model="poll.name"/>
                        </div>
                        <div class="p-field">
                            <label>Description</label>
                            <Textarea v-model="poll.description" :autoResize="true" rows="5"/>
                        </div>
                    </div>
                </Fieldset>
                <Fieldset legend="Questions">
                    <PollQuestion
                        v-for="(question, index) in poll.questions"
                        ref="question"
                        :key="index"
                        :question="question"
                        @delete="deleteQuestion(index)"
                        @update="updateQuestion({ index, ...$event })"
                    />
                    <Button icon="pi pi-save" label="Add Question" @click="addQuestion()" @focus="addQuestion()"/>
                </Fieldset>
            </template>
            <template #footer>
                <Button icon="pi pi-save" label="Save" @click="updatePoll()"/>
                <ButtonLink label="Cancel" icon="pi-times" class="p-button-secondary p-ml-1" :to="{ name: 'home'}"/>
            </template>
        </Card>
    </form>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

import Card from 'primevue/card';
import Fieldset from 'primevue/fieldset';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';

import ButtonLink from '@/components/ButtonLink.vue';
import PollQuestion from '@/components/PollQuestion.vue';

export default {
    name: 'PollEdit',
    computed: {
        ...mapGetters({
            poll: 'polls/poll',
        }),
    },
    async mounted() {
        this.fetchById(this.$route.params.id);
    },
    methods: {
        ...mapActions({
            fetchById: 'polls/fetchById',
            deleteQuestion: 'polls/deleteQuestion',
            updateQuestion: 'polls/updateQuestion',
        }),
        async updatePoll() {
            await this.$store.dispatch('polls/updatePoll');

            this.$toast.add({
                severity: 'success',
                summary: 'Success',
                detail: `Poll "${this.poll.name}" Saved`,
                life: 3000,
            });
        },
        addQuestion() {
            this.$store.dispatch('polls/addQuestion');

            this.$nextTick(() => {
                this.$refs.question.focus();
            });
        },
    },
    components: {
        ButtonLink,
        PollQuestion,
        Card,
        Fieldset,
        InputText,
        Button,
        Textarea,
    },
};
</script>
