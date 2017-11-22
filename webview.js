'use strict'
module.exports = (Franz) => {
  return Franz.loop(() => {
    const selector = '.dashboard .build:first-child:not(.succeeded)'
    const failed = document.querySelector(selector) ? 1 : 0
    return Franz.setBadge(failed)
  })
}
