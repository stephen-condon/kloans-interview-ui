import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from '../../src/store'
import Result from '@/views/Result.vue'

describe('ContactForm.vue', () => {
  it('renders form on shallow mount', async () => {
    const testName = 'test1'
    const testEmail = 'no-reply@test.com'

    const localVue = createLocalVue()
    localVue.use(Vuex)

    // Given
    const wrapper = mount(Result, {
      localVue,
      store: storeConfig
    });
    await wrapper.vm.$store.commit('contact/setContact', {
      name: testName,
      email: testEmail
    })
    const headerTag = wrapper.find('h1');
    const renderedContents = wrapper.find('.render-panel')
    const renderedAnchor = wrapper.find('a')

    // Then
    expect(headerTag.html().includes('Submitted Contact Info')).toBe(true)
    expect(renderedContents.html().includes(testName)).toBe(true)
    expect(renderedAnchor.text().includes(testEmail)).toBe(true)
  })
})
