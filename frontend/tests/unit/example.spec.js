import { shallowMount } from '@vue/test-utils';
import PollList from '@/components/Poll/PollList.vue';

describe('PollList.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(PollList, {
            propsData: { msg },
        });
        expect(wrapper.text()).toMatch(msg);
    });
});
