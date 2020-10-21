import { storiesOf } from '@storybook/vue'
import * as WoMath from '../packages/math'

storiesOf('math', module)
  .add('生成guid', () => ({
    template: `
        <div>
            <button @click="getGuid">生成guid</button>
            <div class="result">{{guid}}</div>
        </div>`,
    data() {
      return {
        guid: ''
      }
    },
    methods: {
      getGuid() {
        this.guid = WoMath.guid()
      }
    }
  }))
