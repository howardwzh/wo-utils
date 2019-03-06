import { storiesOf } from "@storybook/vue";
import woBrowser from "../../src/packages/utils/wo-browser";

storiesOf("wo-browser", module)
  .add("获取当前移动浏览器信息", () => ({
    template: `
        <div>
            <button @click="getBrowserInfo">获取当前移动浏览器信息</button>
            <div class="result">{{browserInfo}}</div>
        </div>`,
    data () {
        return {
          browserInfo: ''
        }
    },
    methods: {
        getBrowserInfo () {
          this.browserInfo = woBrowser
      }
    }
  }))
