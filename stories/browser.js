import { storiesOf } from '@storybook/vue'
import browser from '../packages/browser'

storiesOf('browser', module)
  .add('获取当前移动浏览器信息', () => ({
    template: `
      <div>
          <button @click="getBrowserInfo">获取当前移动浏览器信息</button>
          <div class="result">{{browser}}</div>
      </div>`,
    data () {
      return {
        browser: ''
      }
    },
    methods: {
      getBrowserInfo () {
        this.browser = browser
      }
    }
  }))
  .add('判断是否在指定app中的webview', () => ({
    template: `
      <div>
          <button @click="checkIsInTMallApp">获取当前移动浏览器信息</button>
          <div class="result">是否在TMallApp: {{result}}</div>
      </div>`,
    data () {
      return {
        result: ''
      }
    },
    methods: {
      checkIsInTMallApp () {
        this.result = browser.hasFlagInUA('TMallApp')
      }
    }
  }))
