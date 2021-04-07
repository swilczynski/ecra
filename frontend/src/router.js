import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ './views/poll/PollList.vue'),
            meta: {
                breadcrumbs: [],
            },
        },
        {
            path: '/poll/edit/:id',
            name: 'poll-edit',
            component: () => import(/* webpackChunkName: "about" */ './views/poll/PollEdit.vue'),
            meta: {
                breadcrumbs: [
                    { label: 'Edit Poll' },
                ],
            },
        },
        {
            path: '/poll/:id/votes',
            name: 'poll-votes',
            component: () => import(/* webpackChunkName: "about" */ './views/votes/VoteList.vue'),
            meta: {
                breadcrumbs: [
                    { label: 'View Votes' },
                ],
            },
        },
    ],
});

export default router;
