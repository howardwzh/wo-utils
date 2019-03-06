import { storiesOf } from "@storybook/vue";
import * as woMath from "../../src/packages/utils/wo-math";

storiesOf("wo-math", module)
  .add("生成guid", () => ({
    template: `
        <div>
            <button @click="getGuid">生成guid</button>
            <div class="result">{{guid}}</div>
        </div>`,
    data () {
        return {
          guid: ''
        }
    },
    methods: {
      getGuid () {
          this.guid = woMath.guid()
      }
    }
  }))
