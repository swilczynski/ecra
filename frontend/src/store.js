import { createStore } from 'vuex';

import polls from '@/store/polls';
import votes from '@/store/votes';
import breadcrumbs from '@/store/breadcrumbs';
import progressbar from '@/store/progressbar';

export default createStore({
    modules: {
        polls,
        votes,
        breadcrumbs,
        progressbar,
    },
});
