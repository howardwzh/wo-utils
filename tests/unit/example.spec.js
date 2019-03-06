import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import JkInput from '@/packages/input'

describe('JkInput.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(JkInput, {
      propsData: { value: msg }
    })
    expect(wrapper.vm.value).to.include(msg)
  })
})
