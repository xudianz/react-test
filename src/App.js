import React, { Component } from 'react';

// import LeftNav from './components/LeftNav'
import menuList from './config/menuConfig'
import { NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import './App.css';
// import Header from './components/Header'

import { connect } from 'react-redux'
// import { changeIndex } from './redux/action'


const { SubMenu } = Menu;
const { Sider, Content, Header } = Layout;


class App extends Component {

  state = {
    menuTreeNode: [],
    defaultSelectedKeys: '',
    selectedKeys: '',
    defaultOpenKeys: ''
  }

  componentWillMount () {
    let pathname = this.props.location.pathname
    console.log(pathname)
    let index
    if (pathname.includes('/first') || pathname === '/') {
      index = 0
      this.setState({
        selectedKeys: '/first/ui/button',
      })
    } else if (pathname.includes('/second')) {
      index = 1
      this.setState({
        selectedKeys: '/second/ui/button'
      })
    } else if (pathname.includes('/third')) {
      index = 2
      this.setState({
        selectedKeys: '/third/ui/button'
      })
    }
    
    this.getDefaultOpenKeys(pathname, index)
    const menuTreeNode = this.renderMenu(menuList[index].menu)
    if (pathname === '/') {
      this.setState({
        menuTreeNode,
        defaultSelectedKeys: '/first/ui/button',
      })
    } else {
      this.setState({
        menuTreeNode,
        defaultSelectedKeys: pathname
      })
    }
    
  }

  getDefaultOpenKeys = (pathname, index) => {
    let openkey = ''
    if (pathname === '/') {
      this.setState({
        defaultOpenKeys: '/first/ui',
      })
      return
    }
    menuList[index].menu.forEach((item, index) => {
      if (item.children) {
        item.children.forEach((menu, i) => {
          if (menu.key === pathname) {
            openkey = item.key
          }
        })
      } else {
        if (item.key === pathname) {
          openkey = item.key
        }
      }
    })
    // console.log(openkey)
    this.setState({
      defaultOpenKeys: openkey
    })
  }

  renderMenu = (menuList) => {
    return menuList.map((item, index) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
          <NavLink to={item.key} replace>{item.title}</NavLink>
        </Menu.Item>
      )
    })
  }

  handleClick = ({item, key, keyPath }) => {
    let index
    if (key.includes('/first')) {
      index = 0
    } else if (key.includes('/second')) {
      index = 1
    } else if (key.includes('/third')) {
      index = 2
    }
    const menuTreeNode = this.renderMenu(menuList[index].menu)

    this.setState({
      menuTreeNode,
      defaultSelectedKeys: key
    })
    this.getDefaultOpenKeys(key, index)
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[this.state.selectedKeys]}
            style={{ lineHeight: '64px' }}
            onClick={this.handleClick}
          >
           {
             menuList.map((item, index) => {
              return (
                <Menu.Item key={item.key}>
                  <NavLink to={item.key} replace>{item.topTitle}</NavLink>
                </Menu.Item>
              )
            })
          }
          </Menu>
        </Header>
        {/* <Header /> */}
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={[this.state.defaultSelectedKeys]}
              defaultOpenKeys={[this.state.defaultOpenKeys]}
              style={{ height: '100%', borderRight: 0 }}
            >
              { this.state.menuTreeNode }
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 0 12px 12px' }}>
            <Content className="content">
              {this.props.children}
            </Content>
          </Layout>       
        </Layout>
      </Layout>
    );
  }
}

const mapStateToPorps = (state) => {
  return {
    index: state.index
  }
}

export default connect(mapStateToPorps, null)(App);
