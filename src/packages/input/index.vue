<template>
  <label
    :for="/radio/.test(type) && 'blank'"
    class="wo-input"
  >
    <!-- common icon -->
    <i
      class="wo-input-icon"
      v-if="icon"
    >
      <span :style="{backgroundImage: `url('${icon}')`}"></span>
    </i>
    <!-- common icon# -->

    <!-- common label# -->
    <span
      class="wo-input-label"
      v-if="label"
    >{{label}}</span>
    <!-- common label# -->

    <!-- There is normal input -->
    <input
      class="wo-input-area"
      v-if="!/radio|checkbox|select/.test(type)"
      :type="type"
      @keyup="handleKeyup"
      v-model="val"
      :readonly="readonly"
      :name="name"
      :placeholder="placeholder"
    />
    <!-- There is normal input# -->

    <!-- There is radio -->
    <label
      class="wo-input-radio"
      v-if="/radio/.test(type)"
      v-for="item in radioItems"
      :key="item.value"
    >
      <input
        :type="type"
        @change="handleChange"
        :value="item.value"
        v-model="val"
        :readonly="readonly"
        :name="name"
      />{{item.label}}
    </label>
    <!-- There is radio# -->

    <!-- There are checkbox(s) -->
    <div
      v-if="/checkbox/.test(type)"
      class="wo-input-checkbox"
    >
      <slot></slot>
    </div>
    <!-- There are checkbox(s)# -->

    <!-- There are select -->
    <div
      class="wo-input-select"
      v-if="/select/.test(type)"
    >
      <h5
        class="wo-input-select-name"
        @click="showSelectPop"
        :class="{'hasSelected': value}"
      >{{currentName}}</h5>
      <div
        class="wo-input-select-pop"
        v-show="isShow"
      >
        <div
          class="wo-input-select-pop-box"
          :class="{'needScroll': selectItems.length > 5}"
        >
          <a
            href="javascript:void(0);"
            class="wo-input-select-pop-box-close"
            @click="hideSelectPop"
          ><span class="wo-input-select-pop-box-close-wrap"></span></a>
          <h6 class="wo-input-select-pop-box-title">{{placeholder.replace(/输入/, '选择')}}</h6>
          <dl class="wo-input-select-pop-box-dl">
            <dd
              class="wo-input-select-pop-box-dl-dd"
              v-if="selectItems.length"
              :class="{'selected': value && item[valueKey] === value}"
              @click="handleClick($event, item)"
              v-for="item in selectItems"
              :key="item[valueKey]"
            >
              <b>{{item[nameKey]}}</b>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <!-- There are select# -->

    <!-- common unit -->
    <b
      class="wo-input-unit"
      v-if="unit"
    >{{unit}}</b>
    <!-- common unit# -->
    <div
      class="wo-input-btn"
      v-if="$slots.btn"
    >
      <slot name="btn"></slot>
    </div>

  </label>
</template>

<script>
export default {
  name: 'JkInput',
  props: {
    icon: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    maxLength: {
      type: Number
    },
    value: String | Number,
    readonly: String | Boolean,
    radioItems: Array,
    selectItems: Array,
    default: String | Number,
    unit: String,
    format: {
      type: String,
      default: 'value,name'
    }
  },
  data () {
    return {
      val: this.value,
      isShow: false,
      valueKey: this.format.split(',')[0],
      nameKey: this.format.split(',')[1]
    }
  },
  mounted () {
    if (this.type === 'radio' && this.default) {
      this.val = this.default
      this.handleChange()
    }
  },
  computed: {
    currentName () {
      if (!this.val && this.selectItems) { return this.placeholder.replace(/输入/, '选择') }
      const keyItem = this.selectItems.find(
        item => item[this.valueKey] === this.val
      )
      return keyItem[this.nameKey]
    }
  },
  watch: {
    value: function (val) {
      this.val = val
    }
  },
  methods: {
    handleKeyup () {
      const val = this.val
      this.handleMaxLength(val, this.onChange)
    },
    handleMaxLength (val) {
      if (this.maxLength && val.length > this.maxLength) {
        this.val = val.slice(0, this.maxLength)
      }
      this.$emit('input', val)
    },
    handleChange () {
      this.$emit('input', this.val)
    },
    handleClick (e, item) {
      this.$emit('input', item[this.valueKey])
      this.isShow = false
    },
    showSelectPop () {
      this.isShow = true
    },
    hideSelectPop () {
      this.isShow = false
    }
  }
}
</script>

<style lang="css">
/** common */
.wo-input {
  width: 100%;
  height: 46px;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 0 10px;
  font-size: 14px;
}
.wo-input-icon {
  width: 40px;
  border-right: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  padding-right: 10px;
  margin-right: 12px;
}
.wo-input-icon span {
  display: block;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 30px;
  height: 40px;
  margin: 0 auto;
}
.wo-input-label {
  width: 30%;
  color: #333;
}
.wo-input-unit {
  padding: 0 6px;
}
.wo-input-btn button {
  white-space: nowrap;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  background-color: #f55437;
  border-radius: 3px;
  border: none;
  color: #fff;
  outline: none;
  cursor: pointer;
  font-size: 13px;
}
/** normal input */
.wo-input-area {
  margin-top: -1px;
  width: 100%;
  font-size: 14px;
  outline: none;
  border: none;
  color: #333;
}
/** radio */
.wo-input-radio {
  margin-right: 12px;
}
/** checkbox */
.wo-input-checkbox input {
  margin-right: 6px;
}
.wo-input-checkbox label {
  margin-right: 12px;
}
/** select */
.wo-input-select {
  width: 100%;
}
.wo-input-select-name {
  font-size: 14px;
  color: #999;
  font-weight: normal;
}
.wo-input-select-name.hasSelected {
  color: #333;
}
.wo-input-select-pop {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
.wo-input-select-pop-box {
  position: absolute;
  max-height: 36%;
  bottom: 0;
  width: 100%;
  background-color: #fff;
}
.wo-input-select-pop-box.needScroll {
  height: 36%;
}
.wo-input-select-pop-box-close {
  position: absolute;
  border: 1px solid #fff;
  width: 30px;
  height: 30px;
  top: -80px;
  left: 50%;
  margin-left: -15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
}
.wo-input-select-pop-box-close-wrap {
  height: 1px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 1px;
}
.wo-input-select-pop-box-close-wrap::before, .wo-input-select-pop-box-close-wrap::after {
  content: ' ';
  width: 80%;
  height: 1px;
  background-color: #fff;
  margin: 0 auto;
}
.wo-input-select-pop-box-close-wrap::before {
  transform: rotate(45deg);
}
.wo-input-select-pop-box-close-wrap::after {
  transform: rotate(-45deg);
}
.wo-input-select-pop-box-title {
  position: absolute;
  left: 0;
  top: -40px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ececec;
  background-color: #fff;
  width: 100%;
  z-index: 10;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
}
.wo-input-select-pop-box-dl {
  overflow: auto;
  height: 100%;
}
.wo-input-select-pop-box-dl-dd {
  margin: 0 10px;
  padding: 10px 28px;
  border-bottom: 1px solid #ececec;
  position: relative;
  font-size: 16px;
}
.wo-input-select-pop-box-dl-dd::after {
  position: absolute;
  content: " ";
  width: 8px;
  height: 8px;
  border-right: 2px solid #ddd;
  border-bottom: 2px solid #ddd;
  transform: rotate(-45deg);
  right: 10px;
  top: 50%;
  margin-top: -4px;
}
.wo-input-select-pop-box-dl-dd::before {
  position: absolute;
  content: " ";
  width: 4px;
  height: 4px;
  left: 8px;
  background-color: #999;
  border-radius: 50%;
  top: 50%;
  margin-top: -2px;
}
.wo-input-select-pop-box-dl-dd.selected {
  color: #ff6a13;
}
.wo-input-select-pop-box-dl-dd.selected::after {
  border-color: #ff6a13;
}
.wo-input-select-pop-box-dl-dd.selected::before {
  background-color: #ff6a13;
}
</style>
