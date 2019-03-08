# gzjk-utils
广金金控的前端函数/套件库

## Api使用手册/demo
http://www.gzjkp2p.net.cn/mbxbank/activity/gzjk-utils/index.html

## 安装
```
npm install gzjk-utils -S

or

yarn add gzjk-utils
```

## 使用
```js
import { browser } from 'gzjk-utils'
or
import browser from 'gzjk-utils/packages/browser'
...


if (browser.isIOS) {
  alert('I am ios!')
}
```
