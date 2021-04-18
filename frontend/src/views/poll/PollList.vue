<template>
    <div class="p-grid p-mt-1" v-if="!loading">
        <div class="p-d-flex p-col-4" v-for="poll in polls" :key="poll._id">
            <Card class="p-d-flex">
                <template #title>
                    {{ poll.name }}
                    <Button class="p-button-text p-button-danger delete" icon="pi pi-times" @click="deletePoll(poll._id, $event)"/>
                    <ConfirmPopup></ConfirmPopup>
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
        <div class="p-d-flex p-col-4" v-if="!loading">
            <Card class="p-d-flex">
                <template #footer>
                    <ButtonLink label="Add new" icon="pi-pencil" class="p-button-secondary" :to="{ name: 'poll-add'}"/>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Card from 'primevue/card';
import Button from 'primevue/button';
import ConfirmPopup from 'primevue/confirmpopup';
import ButtonLink from '@/components/ButtonLink.vue';

export default {
    name: 'PollList',
    computed: {
        ...mapGetters({
            polls: 'polls/polls',
        }),
        loading() {
            return this.polls === null;
        },
    },
    mounted() {
        this.fetchAllPolls();
    },
    methods: {
        ...mapActions({
            fetchAllPolls: 'polls/fetchAll',
            deletePoll: 'polls/delete',
        }),
        deletePoll(id, event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: async () => {
                    await this.$store.dispatch('polls/remove', id);

                    this.$toast.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Poll Removed',
                        life: 3000,
                    });
                },
            });
        },
    },
    components: {
        Button,
        Card,
        ConfirmPopup,
        ButtonLink,
    },
};
</script>
<style scoped lang="scss">
    ::v-deep(.p-card) {
        width: 100%;
        position: relative;

        .p-card-body {
            display: flex;
            flex-direction: column;

            .p-card-title,
            .p-card-content {
                flex-grow: 1;
            }
        }

        .delete {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
        }
    }
</style>
