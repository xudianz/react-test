const menuList = [
  {
    topTitle: '标题一',
    key: '/first/home',
    menu: [
      {
        title: '首页',
        key: '/first/home'
      },
      {
        title: 'UI',
        key: '/first/ui',
        children: [
          {
            title: '按钮',
            key: '/first/ui/button'
          },
          {
            title: '弹框',
            key: '/first/ui/modals'
          },
          {
            title: 'loading',
            key: '/first/ui/loading'
          }
        ]
      },
      {
        title: '表单',
        key: '/first/form',
        children: [
          {
            title: '基础表单',
            key: '/first/form/base'
          },
          {
            title: '登录',
            key: '/first/form/login'
          },
          {
            title: '注册',
            key: '/first/form/register'
          }
        ]
      }
    ]
  },
  {
    topTitle: '标题二',
    key: '/second/ui2/button',
    menu: [
      {
        title: 'UI2',
        key: '/second/ui2',
        children: [
          {
            title: '按钮',
            key: '/second/ui2/button'
          },
          {
            title: '弹框',
            key: '/second/ui2/modals'
          },
          {
            title: 'loading',
            key: '/second/ui2/loading'
          }
        ]
      },
      {
        title: '富文本',
        key: '/second/fuwenben'
      }
    ]
  },
  {
    topTitle: '标题三',
    key: '/third/ui3/button',
    menu: [
      {
        title: 'UI3',
        key: '/third/ui3',
        children: [
          {
            title: '按钮',
            key: '/third/ui3/button'
          },
          {
            title: '弹框',
            key: '/third/ui3/modals'
          },
          {
            title: 'loading',
            key: '/third/ui3/loading'
          }
        ]
      },
    ]
  }
]

export default menuList