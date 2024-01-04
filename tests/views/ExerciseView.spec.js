import { shallowMount } from '@vue/test-utils'
import ExerciseView from '../../src/views/ExerciseView.vue'
import ExercisesComponent from '../../src/components/ExercisesComponent.vue'

describe('ExerciseView.vue', () => {
  it('renders ExerciseView with ExercisesComponent', () => {
    const wrapper = shallowMount(ExerciseView)
    expect(wrapper.findComponent(ExercisesComponent).exists()).toBe(true)
  })
})
