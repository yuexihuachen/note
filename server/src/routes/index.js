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