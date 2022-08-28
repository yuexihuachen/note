const helmet = require('koa-helmet')
/**
 * koa-helmet
 * 通过设置 Http 头来使应用程序更加安全，避免常见的漏洞攻击 csrf xss
 */
module.exports = () => {
  return helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "img-src": ["'self'", "i.imgur.com"],
      },
    },
  })
}