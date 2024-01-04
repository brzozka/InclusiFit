import { shallowMount } from '@vue/test-utils'
import FullBarSection from '../../src/components/FullBarSection.vue'

describe('FullBarSection.vue', () => {
  it('renders full bar section with title and subtitles', () => {
    const title = 'Test Title'
    const subtitle1 = 'Subtitle 1'
    const subtitle2 = 'Subtitle 2'
    const wrapper = shallowMount(FullBarSection, {
      props: { title, subtitle1, subtitle2 }
    })
    expect(wrapper.text()).toMatch(title)
    expect(wrapper.text()).toMatch(subtitle1)
    expect(wrapper.text()).toMatch(subtitle2)
  })
})
