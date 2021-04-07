<template>
    <div class="p-field">
        <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
                <i class="pi pi-question-circle"></i>
            </span>
            <InputText @blur="update()" v-model="text" ref="firstElement"/>
            <Button icon="pi pi-times" class="p-button-danger" tabindex="-1" @click="$emit('delete')"/>
        </div>
    </div>
    <div class="p-field">
        <div class="p-inputgroup p-mb-1">
            <span class="p-inputgroup-addon">
                <i class="pi pi-circle-on pi-circle-green"></i>
            </span>
            <InputText @blur="update()" v-model="pro"/>
        </div>
        <div class="p-inputgroup p-mb-1">
            <span class="p-inputgroup-addon pi-circle-red">
                <i class="pi pi-circle-on"></i>
            </span>
            <InputText @blur="update(true)" v-model="con"/>
        </div>
    </div>
    <Divider/>
</template>

<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Divider from 'primevue/divider';

export default {
    name: 'PollQuestion',
    props: [
        'question',
    ],
    data() {
        return {
            text: this.question.text,
            pro: this.question.pro,
            con: this.question.con,
        };
    },
    methods: {
        focus() {
            this.$refs.firstElement.$el.focus();
        },
        update() {
            const question = {
                text: this.text,
                pro: this.pro,
                con: this.con,
            };

            this.$emit('update', question);
        },
    },
    emits: [
        'delete',
        'update',
    ],
    components: {
        Button,
        InputText,
        Divider,
    },
};
</script>
