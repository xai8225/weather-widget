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
    const mockMethod = jest.spyOn(Weather.methods, 'getWeather')
    const wrapper = shallowMount(Weather, {
      mocks: {
        $route
      }
    })

    expect(mockMethod).toHaveBeenCalled();
    expect(wrapper.html().includes('Go for another search')).toBe(true);
    expect(wrapper.vm.cityName).toBe('KHARKIV')
  })
})
