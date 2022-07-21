const assert = require('assert')

describe('@render header', function() {
  before(async function() {
    // base url http://localhost:3000 
    await this.nemo.driver.get(`${this.nemo.data.baseUrl}/`)
  })

  it('go javascript', async function() {
    const nemo = this.nemo
    const firstMenu = await nemo.view.homePageUI.firstMenuWaitVisible()
    firstMenu.click()
    const text = await nemo.view.homePageUI.commonTitleWaitVisible().getText()
    assert.equal(text, 'JavaScript')
    await nemo.driver.sleep(3000)
  })

  it('go NodeJs', async function() {
    const nemo = this.nemo
    const firstMenu = await nemo.view.homePageUI.nodejsMenuWaitVisible()
    firstMenu.click()
    const text = await nemo.view.homePageUI.commonTitleWaitVisible().getText()
    assert.equal(text, 'NodeJs')
    await nemo.driver.sleep(3000)
  })

})
