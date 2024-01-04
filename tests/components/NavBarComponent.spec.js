import { shallowMount } from '@vue/test-utils'
import NavBarComponent from '../../src/components/NavBarComponent.vue'

describe('NavBarComponent.vue', () => {
  it('renders navigation bar', () => {
    const wrapper = shallowMount(NavBarComponent)
    expect(wrapper.find('nav').exists()).toBe(true)
  })
})
