import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'
Vue.use(Vuetify)

describe('Home.vue', () => {
  it('renders correctly', () => {
    const message = 'new message'
    const wrapper = shallowMount(Home, {
      propsData: { message }
    })
    expect(wrapper.element).toMatchSnapshot();
  })
})
