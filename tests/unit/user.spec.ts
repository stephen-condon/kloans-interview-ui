import { shallowMount } from '@vue/test-utils'
import User from '@/views/User.vue'

describe('User.vue', () => {
  it('renders user id info from required prop', () => {
    // Given
    const userId = '123';
    const expectedMessage = 'User id is: 123';
    const targetElementId = '#user';

    // When
    const wrapper = shallowMount(User, {
      propsData: { userId }
    });

    // Should
    expect(wrapper.find(targetElementId).text()).toMatch(expectedMessage);
  })
})
