import { shallowMount } from '@vue/test-utils'
import ExercisesComponent from '../../src/components/ExercisesComponent.vue'

describe('ExercisesComponent.vue', () => {
  it('renders exercises list', () => {
    const exercises = [
      {
        name: 'Exercise 1',
        description: 'Description 1',
        tags: ['tag1'],
        videoUrl: 'http://example.com/video1'
      }
    ]
    const wrapper = shallowMount(ExercisesComponent, {
      props: { exercises }
    })
    expect(wrapper.findAll('article').length).toBe(exercises.length)
  })
})
