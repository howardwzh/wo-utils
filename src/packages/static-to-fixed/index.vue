<template>
  <div class="wo-static-to-fixed" :style="needToFixed ? fixedStyle : {}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JkStaticToFixed',
  props: {
    keyPos: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      needToFixed: false,
      domProperty: {}
    }
  },
  computed: {
    keyScrollPos () {
      return this.domProperty.top - this.keyPos
    },
    fixedStyle () {
      return {
        position: 'fixed',
        width: `${this.domProperty.width}px`,
        height: `${this.domProperty.height}px`,
        top: `${this.keyPos}px`,
        left: `${this.domProperty.left}px`
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.getDomProperty()
    }, 0)
    window.addEventListener('resize', () => {
      this.needToFixed = false
      setTimeout(this.getDomProperty, 100)
    })
    window.addEventListener('scroll', this.checkNeedToFixed)
  },
  destroyed () {
    window.removeEventListener('resize', this.getDomProperty)
    window.removeEventListener('scroll', this.checkNeedToFixed)
  },
  methods: {
    checkNeedToFixed () {
      this.needToFixed = window.scrollY > this.keyScrollPos
    },
    getDomProperty () {
      const boundingClientRect = this.$el.children[0].getBoundingClientRect()
      this.domProperty = {
        width: this.$el.children[0].offsetWidth,
        height: this.$el.children[0].offsetHeight,
        top: this.domProperty.top || boundingClientRect.top,
        left: boundingClientRect.left
      }
      setTimeout(this.checkNeedToFixed, 0)
    }
  }
}
</script>
