import { storiesOf } from '@storybook/vue'
import JkInput from '../src/packages/input'
const icon = require('./assets/images/boy.png')

storiesOf('JkInput', module)
  .add('value', () => ({
    components: { JkInput },
    template: `
        <div>
            <jk-input v-model="value" />
            <div class="result">result: {{value}}</div>
        </div>`,
    data () {
      return {
        value: '一拳超人'
      }
    }
  }))
  .add('value + readonly', () => ({
    components: { JkInput },
    template: '<jk-input value="我是只读" readonly/>'
  }))
  .add('label + value', () => ({
    components: { JkInput },
    template: `
        <div>
            <jk-input label="用户名" v-model="value"/>
            <div class="result">result: {{value}}</div>
        </div>`,
    data () {
      return {
        value: '一拳超人'
      }
    }
  }))
  .add('icon + label + value', () => ({
    components: { JkInput },
    template: `
        <div>
            <jk-input icon="${icon}" label="用户名" v-model="value"/>
            <div class="result">result: {{value}}</div>
        </div>`,
    data () {
      return {
        value: '一拳超人'
      }
    }
  }))
  .add('icon + value', () => ({
    components: { JkInput },
    template: `
        <div>
            <jk-input icon="${icon}" v-model="value"/>
            <div class="result">result: {{value}}</div>
        </div>`,
    data () {
      return {
        value: '一拳超人'
      }
    }
  }))
  .add('label + value + unit', () => ({
    components: { JkInput },
    template: `
        <div>
            <jk-input label="金额" type="number" v-model="value" unit="RMB"/>
            <div class="result">result: {{value}}</div>
        </div>`,
    data () {
      return {
        value: 2000
      }
    }
  }))
  .add('label + value + btn', () => ({
    components: { JkInput },
    template: `
        <div>
            <jk-input label="金额" type="number" v-model="value">
                <button class="btn" slot="btn" @click="getCheckCode">获取验证码</button>
            </jk-input>
            <div class="result">result: {{value}}</div>
        </div>`,
    data () {
      return {
        value: 2000
      }
    },
    methods: {
      getCheckCode () {
        alert('获取验证码')
      }
    }
  }))
  .add('label + radio', () => ({
    components: { JkInput },
    template: `
        <div>
            <jk-input label="请选择性别" :radioItems="radioItems" type="radio" v-model="value"/>
            <div class="result">result: {{value}}</div>
        </div>`,
    data () {
      return {
        radioItems: [{
          value: '1',
          label: '男'
        }, {
          value: '2',
          label: '女'
        }],
        value: '1'
      }
    }
  }))
  .add('label + checkbox (单选)', () => ({
    components: { JkInput },
    template: `
            <div>
                <jk-input label="其他添加" type="checkbox">
                    <label>
                        <input type="checkbox" v-model="check1" />加糖
                    </label>
                    <label>
                        <input type="checkbox" v-model="check2" />加牛奶
                    </label>
                </jk-input>
                <div class="result">
                    其他添加
                    <br/>加糖: {{check1}}
                    <br/>加牛奶: {{check2}}
                </div>
            </div>`,
    data () {
      return {
        check1: false,
        check2: true
      }
    }
  }))
  .add('label + checkbox (复选)', () => ({
    components: { JkInput },
    template: `
            <div>
                <jk-input label="其他添加" type="checkbox">
                    <label>
                        <input type="checkbox" value="加糖" v-model="checkAll" />加糖
                    </label>
                    <label>
                        <input type="checkbox" value="加牛奶" v-model="checkAll" />加牛奶
                    </label>
                </jk-input>
                <div class="result">
                    其他添加: {{checkAll}}
                </div>
            </div>`,
    data () {
      return {
        checkAll: ['加牛奶']
      }
    }
  }))
  .add('label + select', () => ({
    components: { JkInput },
    template: `
            <div>
                <jk-input label="选择其他" type="select" v-model="value" :selectItems="selectItems" />
                <div class="result">
                    选择其他: {{value}}
                </div>
            </div>`,
    data () {
      return {
        value: 0,
        selectItems: [{
          name: '牛奶',
          value: 1
        }, {
          name: '苹果',
          value: 2
        }, {
          name: '李子',
          value: 3
        }, {
          name: '鸡腿',
          value: 4
        }, {
          name: '鸭脖',
          value: 5
        }, {
          name: '坚果',
          value: 6
        }]
      }
    }
  }))
