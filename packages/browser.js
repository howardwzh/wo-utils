/**
 * 获取浏览器的相关信息
 */
const browser = (() => {
  const UA = navigator.userAgent || ''
  const isAndroid = (function () {
    return !!UA.match(/Android/i)
  })()
  const isQQ = (function () {
    return (
      /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d.]+)/.test(UA) ||
      /\bV1_AND_SQI?_([\d.]+)(.*? QQ\/([\d.]+))?/.test(UA)
    )
  })()
  const isIOS = (function () {
    return !!UA.match(/iPhone|iPad|iPod/i)
  })()
  const isSafari = (function () {
    return /iPhone|iPad|iPod\/([\w.]+).*(safari).*/i.test(UA)
  })()
  const isWx = (function () {
    return !!UA.match(/micromessenger/i)
  })()
  const isWb = (function () {
    return !!UA.match(/weibo/i)
  })()
  const isAndroidChrome = (function () {
    return (
      (UA.match(/Chrome\/([\d.]+)/) || UA.match(/CriOS\/([\d.]+)/)) &&
      isAndroid &&
      !isQQ
    )
  })()
  const isQZ = (function () {
    return UA.indexOf('Qzone/') !== -1
  })()
  const isWebview = (function () {
    var useragent = navigator.userAgent
    var rules = ['WebView', '(iPhone|iPod|iPad)(?!.*Safari/)', 'Android.*(wv|.0.0.0)']
    var regex = new RegExp(`(${rules.join('|')})`, 'ig')
    return Boolean(useragent.match(regex))
  })()
  const hasFlagInUA = function (uaFlag) {
    const pattern = new RegExp(uaFlag, 'i')
    return pattern.test(UA)
  }
  const browser = {
    isAndroid,
    isIOS,
    isSafari,
    isQQ,
    isWb,
    isWx,
    isQZ,
    isAndroidChrome,
    isWebview,
    isMoblie: isAndroid || isIOS,
    hasFlagInUA
  }
  return browser
})()

export default browser
