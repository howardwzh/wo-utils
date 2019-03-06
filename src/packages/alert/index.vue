<template>
  <div v-if="this.data.length" class="wo-alert">
    <div class="wo-alert-box">
      <div class="wo-alert-box-title" v-if="lastItem.title" v-html="lastItem.title"></div>
      <div class="wo-alert-box-text" v-if="lastItem.text" v-html="lastItem.text"></div>
      <div class="wo-alert-box-btns" v-if="lastItem.btns.length">
        <button :style="getBtnStyle(btn)" v-for="btn in lastItem.btns" :key="btn.text" @click="btnCallback(btn)">{{btn.text}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JkAlert',
  data () {
    return {
      data: []
    }
  },
  computed: {
    lastItem () {
      return this.data[this.data.length - 1]
    }
  },
  methods: {
    getBtnStyle (btn) {
      const btnStyle = {}
      btn.bgColor && (btnStyle['background-color'] = btn.bgColor)
      btn.fontColor && (btnStyle['color'] = btn.fontColor)
      return btnStyle
    },
    btnCallback (btn) {
      switch (true) {
        case !!(btn.callback && btn.keep):
          btn.callback()
          break
        case !!btn.callback:
          btn.callback()
          this.hide()
          break
        default:
          this.hide()
          break
      }
    },
    show (item) {
      this.data.push(item)
    },
    hide () {
      this.data.pop()
    }
  }
}
</script>

<style lang="css">
.wo-alert {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, .3);
  text-align: center;
  display: flex;
  align-items: center;
}
.wo-alert-box {
  width: 80%;
  background-color: #fff;
  margin: -100px auto 0;
  text-align: center;
  border-radius: 6px;
  padding: 0;
  overflow: hidden;
}
.wo-alert-box-title {
  font-size: 16px;
  border-bottom: 1px solid #ddd;
  padding: 14px;
  background-color: #e7ebf5;
}
.wo-alert-box-text {
  font-size: 14px;
  padding: 20px 20px;
  color: #555;
}
.wo-alert-box-btns {
  display: flex;
}
.wo-alert-box-btns button {
  padding: 14px 0;
  background-color: #6044ff;
  border: none;
  color: #fff;
  font-size: 16px;
  flex: 1;
}
</style>
