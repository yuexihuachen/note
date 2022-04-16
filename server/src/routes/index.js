/**
 * 路由配置文件
 * match：路由名称
 * controller： 控制器
 * method： 方法
 */
export default [
  {
    match: '/',
    controller: 'index.index'
  },
  {
    match: '/home',
    controller: 'index.home'
  },
  {
    match: '/search',
    controller: 'index.search'
  },
  {
    match: '/update',
    method: 'post',
    controller: 'index.update'
  },
  {
    match: '/login',
    controller: 'login.login'
  },
  {
    match: '/loginupdate',
    controller: 'login.update'
  }
]