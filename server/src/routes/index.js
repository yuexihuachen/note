/**
 * 路由配置文件
 * match：路由名称
 * controller： 控制器
 * method： 方法
 */
export default [
  {
    match: '/',
    controller: 'home.index'
  },
  {
    match: '/home',
    controller: 'index.home'
  },
  {
    match: '/search',
    controller: 'login.search'
  },
  {
    match: '/searchNote',
    controller: 'login.searchNote',
    method: 'post',
  },
  {
    match: '/checkNote',
    controller: 'index.checkNote',
    method: 'post',
  },
  {
    match: '/update',
    method: 'post',
    controller: 'index.update'
  },
  {
    match: '/loginupdate',
    controller: 'login.update'
  },
  {
    match: '/write',
    controller: 'login.write'
  },
  {
    match: '/getCategory',
    controller: 'data.category'
  },
  {
    match:'/isLogin',
    controller: "login.isLogin"
  },
  {
    match:'/login',
    controller: "login.Login",
    method: 'post'
  },
  {
    match: '/setArticle',
    controller: 'data.setArticle',
    method: 'post'
  },
  {
    match: '/:page',
    controller: 'menubar.allPage'
  }
]