'use strict'
module.exports = (Franz) => {

  // Badge to include any recently failed builds.
  const recent = (span) => {
    const ago = span.innerHTML
    const n = parseInt(ago.match(/^\d+/))
    const today = /sec|min|h(ou)?r/.test(ago)
    const week = n < 7 && ago.includes('day')
    return today || week
  }

  return Franz.loop(() => {
    const selector = '.build.failed .recent-time.start-time > span:nth-child(2)'
    const failed = Array.from(document.querySelectorAll(selector))
    const unread = failed.filter(recent)
    return Franz.setBadge(unread.length)
  })
}
