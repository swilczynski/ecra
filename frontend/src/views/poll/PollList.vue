<template>
    <div class="p-grid p-mt-1">
        <div class="p-d-flex p-col-4" v-for="poll in polls" :key="poll._id">
            <Card class="p-d-flex">
                <template #title>
                    {{ poll.name }}
                </template>
                <template #content>
                    <p>{{ poll.description }}</p>
                </template>
                <template #footer>
                    <ButtonLink label="Edit" icon="pi-pencil" class="p-button-primary" :to="{ name: 'poll-edit', params: { id: poll._id }}"/>
                    <ButtonLink label="View Votes" icon="pi-chart-line" class="p-button-success p-ml-1" :to="{ name: 'poll-votes', params: { id: poll._id }}"/>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Card from 'primevue/card';
import ButtonLink from '@/components/ButtonLink.vue';

export default {
    name: 'PollList',
    computed: {
        ...mapGetters({
            polls: 'polls/polls',
        }),
    },
    mounted() {
        this.fetchAllPolls();
    },
    methods: {
        ...mapActions({
            fetchAllPolls: 'polls/fetchAll',
        }),
    },
    components: {
        ButtonLink,
        Card,
    },
};
</script>
<style scoped lang="scss">
    ::v-deep(.p-card) {
        .p-card-body {
            display: flex;
            flex-direction: column;

            .p-card-title,
            .p-card-content {
                flex-grow: 1;
            }
        }
    }
</style>
