import { expect } from 'chai'
import browser from '../../packages/browser'

describe('browser', () => {
  it('when brower is ios, then return isIOS is true', () => {
    navigator.__defineGetter__('userAgent', function () {
      return 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1' // customized user agent
    })
    expect(browser.isIOS).to.equal(true)
  })
})
