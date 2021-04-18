<template>
    <form>
        <Card class="p-mt-1">
            <template #content>
                <PollForm :poll="poll" @update="updatePoll($event)"/>
            </template>
            <template #footer>
                <Button icon="pi pi-save" label="Save" @click="savePoll()"/>
                <ButtonLink label="Cancel" icon="pi-times" class="p-button-secondary p-ml-1" :to="{ name: 'home'}"/>
            </template>
        </Card>
    </form>
</template>
<script>
import { mapGetters } from 'vuex';

import Card from 'primevue/card';
import Button from 'primevue/button';

import PollForm from '@/components/PollForm.vue';
import ButtonLink from '@/components/ButtonLink.vue';

export default {
    name: 'PollAdd',
    data() {
        return {
            model: {},
        };
    },
    computed: {
        ...mapGetters({
            poll: 'polls/poll',
        }),
    },
    methods: {
        updatePoll(poll) {
            this.model = poll;
        },
        async savePoll() {
            await this.$store.dispatch('polls/update', this.model);

            this.$toast.add({
                severity: 'success',
                summary: 'Success',
                detail: `Poll "${this.poll.name}" Saved`,
                life: 3000,
            });

            this.$router.push({ name: 'poll-edit', params: { id: this.poll._id } });
        },
    },
    components: {
        Card,
        PollForm,
        ButtonLink,
        Button,
    },
};
</script>
