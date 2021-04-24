import { shallowMount } from '@vue/test-utils'
import Weather from '@/components/Weather.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'

Vue.use(Vuetify)
const $route = {
  params: {
    city: 'kharkiv'
  }
}

describe('Weather.vue', () => {
  it('renders correctly', async () => {
    const message = 'new message'
    const wrapper = shallowMount(Weather, {
      propsData: { message },
      mocks: {
        $route
      }
    })
    console.log(wrapper.html());
    expect(wrapper.html().includes('Weather in Kharkiv')).toBe(true)
  })
})
