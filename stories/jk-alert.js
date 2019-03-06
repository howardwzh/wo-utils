import { storiesOf } from '@storybook/vue'
import JkAlert from '../src/packages/alert'

storiesOf('JkAlert', module)
  .add('单弹窗 + 单个按钮', () => ({
    components: { JkAlert },
    template: `
        <div>
            <jk-alert ref="JkAlert" />
            <button @click="bashAlert">弹窗</button>
            <div class="result">{{status}}</div>
        </div>`,
    data () {
      return {
        status: '未点击'
      }
    },
    methods: {
      bashAlert () {
        this.status = '打开弹窗'
        this.$refs.JkAlert.show({
          title: '弹窗标题',
          text: '这里是演示弹窗内容哦～',
          btns: [{
            text: '确定',
            callback: () => {
              this.status = '关闭弹窗'
            }
          }]
        })
      }
    }
  }))
  .add('单弹窗 + 多个按钮 + 自定义按钮样式', () => ({
    components: { JkAlert },
    template: `
        <div>
            <jk-alert ref="JkAlert" />
            <button @click="bashAlert">弹窗</button>
            <div class="result">{{status}}</div>
        </div>`,
    data () {
      return {
        status: '未点击'
      }
    },
    methods: {
      bashAlert () {
        this.status = '打开弹窗'
        this.$refs.JkAlert.show({
          title: '弹窗标题',
          text: '这里是演示弹窗内容哦～',
          btns: [{
            text: '确定',
            bgColor: '#6044ff',
            fontColor: '',
            callback: () => {
              this.status = '点击确定'
            }
          }, {
            text: '取消',
            bgColor: '#ddd',
            fontColor: '#333',
            callback: () => {
              this.status = '点击取消'
            }
          }]
        })
      }
    }
  }))
  .add('多层弹窗 + 多个按钮 + 自定义按钮样式', () => ({
    components: { JkAlert },
    template: `
        <div>
            <jk-alert ref="JkAlert" />
            <button @click="bashAlert">多层弹窗</button>
            <div class="result">{{status}}</div>
        </div>`,
    data () {
      return {
        status: '未点击'
      }
    },
    methods: {
      bashAlert () {
        this.status = '打开第一层弹窗'
        this.$refs.JkAlert.show({
          title: '第一层弹窗标题',
          text: '这里是演示第一层弹窗内容哦～',
          btns: [{
            keep: true,
            text: '确定',
            bgColor: '#6044ff',
            fontColor: '',
            callback: () => {
              this.status = '打开第二层弹窗'
              this.$refs.JkAlert.show({
                title: '第二层弹窗标题',
                text: '这里是演示第二层弹窗内容哦～',
                btns: [{
                  text: '确定',
                  bgColor: '#a7f824',
                  fontColor: '#333',
                  callback: () => {
                    this.status = '返回第一层弹窗'
                  }
                }]
              })
            }
          }, {
            text: '取消',
            bgColor: '#ddd',
            fontColor: '#333',
            callback: () => {
              this.status = '点击取消'
            }
          }]
        })
      }
    }
  }))
