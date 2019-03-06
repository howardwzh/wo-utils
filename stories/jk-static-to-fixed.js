import { storiesOf } from '@storybook/vue'
import JkStaticToFixed from '../src/packages/static-to-fixed'

storiesOf('JkStaticToFixed', module)
  .add('base + default key-pos=0', () => ({
    components: { JkStaticToFixed },
    template: `
        <div class="high-box">
            <div class="transparent-box"></div>
            <div class="transparent-box"></div>
            <jk-static-to-fixed>
                <div class="black-box"></div>
            </jk-static-to-fixed>
        </div>`
  }))
  .add('base + custom key-pos=50', () => ({
    components: { JkStaticToFixed },
    template: `
        <div class="high-box">
            <div class="transparent-box"></div>
            <div class="transparent-box"></div>
            <jk-static-to-fixed :key-pos="50">
                <div class="black-box"></div>
            </jk-static-to-fixed>
        </div>`
  }))
  .add('in doms + custom key-pos=50', () => ({
    components: { JkStaticToFixed },
    template: `
        <div class="high-box">
            <div class="transparent-box"></div>
            <div class="transparent-box"></div>
            <div class="flex-box">
                <div class="blue-box flex1"></div>
                <div class="flex1">
                    <jk-static-to-fixed :key-pos="50">
                        <div class="black-box"></div>
                    </jk-static-to-fixed>
                </div>
            </div>
        </div>`
  }))
  .add('init absolute + top 100 + right 100  + custom key-pos=50', () => ({
    components: { JkStaticToFixed },
    template: `
        <div class="high-box">
          <div class="absolute top100 right100">
            <jk-static-to-fixed :key-pos="50">
                <div class="black-box width100 height50"></div>
            </jk-static-to-fixed>
          </div>
        </div>`
  }))
  .add('init absolute + bottom 100 + left 100 + custom key-pos=50', () => ({
    components: { JkStaticToFixed },
    template: `
        <div class="high-box">
          <div class="absolute bottom100 left100">
            <jk-static-to-fixed :key-pos="50">
                <div class="black-box width100 height50"></div>
            </jk-static-to-fixed>
          </div>
        </div>`
  }))
