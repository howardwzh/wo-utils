import { storiesOf } from '@storybook/vue'
import { browser, scrollToContent } from '../packages/browser'

storiesOf('browser', module)
  .add('获取当前移动浏览器信息', () => ({
    template: `
      <div>
          <button @click="getBrowserInfo">获取当前移动浏览器信息</button>
          <div class="result">{{browser}}</div>
      </div>`,
    data() {
      return {
        browser: ''
      }
    },
    methods: {
      getBrowserInfo() {
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
    data() {
      return {
        result: ''
      }
    },
    methods: {
      checkIsInTMallApp() {
        this.result = browser.hasFlagInUA('TMallApp')
      }
    }
  }))
  .add('在window中，滚动到对应id的内容', () => ({
    template: `
      <div>
          <div>
            <button @click="scrollToContent('Part_1')">去部分1</button>
            <button @click="scrollToContent('Part_2')">去部分2</button>
          </div>
          <div :style="{height: '300px'}"></div>
          <div id="Part_1" :style="{height: '800px'}">部分1</div>
          <div id="Part_2" :style="{height: '800px'}">部分2</div>
      </div>`,
    data() {
      return {
      }
    },
    methods: {
      scrollToContent
    }
  }))
  .add('在wrapper中，滚动到对应id的内容', () => ({
    template: `
      <div>
          <div>
            <button @click="scrollToContent('Part_1', 'ScrollWrapper')">去部分1</button>
            <button @click="scrollToContent('Part_2', 'ScrollWrapper')">去部分2</button>
          </div>
          <div :style="{height: '10px'}"></div>
          <div id="ScrollWrapper" :style="{height: '500px', overflow: 'auto', border: '1px solid #999'}">
            <div id="Part_1" :style="{height: '800px'}">部分1</div>
            <div id="Part_2" :style="{height: '800px'}">部分2</div>
          </div>
      </div>`,
    data() {
      return {
      }
    },
    methods: {
      scrollToContent
    }
  }))
