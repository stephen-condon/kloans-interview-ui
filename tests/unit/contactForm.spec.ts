import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from '../../src/store'
import ContactForm from '@/components/ContactForm.vue'

describe('ContactForm.vue', () => {
  it('renders form on shallow mount', () => {
    // Given
    const wrapper = shallowMount(ContactForm, {});
    const labels = wrapper.findAll('label');
    const inputs = wrapper.findAll('input')
    const submitButton = wrapper.find('button')

    // Should
    expect(labels.length).toBe(2)
    expect(inputs.length).toBe(2)
    expect(labels.at(0).html().includes('Name')).toBe(true)
    expect(inputs.at(0).attributes('type')).toBe('text')
    expect(labels.at(1).html().includes('Email')).toBe(true)
    expect(submitButton.exists()).toBe(true)
    expect(submitButton.html().includes('Submit')).toBe(true)
  })

  it('pushes contact to store on click of submit button; given live store', async () => {
    // Given
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const wrapper = mount(ContactForm, {
      localVue,
      store: storeConfig
    });
    const inputs = wrapper.findAll('input')
    const submitButton = wrapper.find('button')

    const testName = 'test1'
    const testEmail = 'no-reply@test.com'

    // When
    await inputs.at(0).setValue(testName)
    await inputs.at(1).setValue(testEmail)
    await submitButton.trigger('click')
    await wrapper.vm.$nextTick()

    // Then
    expect(wrapper.vm.$store.getters['contact/getContact'].name).toBe(testName)
    expect(wrapper.vm.$store.getters['contact/getContact'].email).toBe(testEmail)
  })
})
