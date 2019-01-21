import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import './index.less';
import menuList from '../../config/menuConfig'

const { Header } = Layout

class IHeader extends Component {

  state = {
    defaultSelectedKeys: ''
  }

  componentWillMount () {
    let pathname = this.props.location.pathname
    console.log(pathname)
    let index
    if (pathname.includes('/first') || pathname === '/') {
      index = 0
      this.setState({
        defaultSelectedKeys: '/first/ui/button',
      })
    } else if (pathname.includes('/second')) {
      index = 1
      this.setState({
        defaultSelectedKeys: '/second/ui/button'
      })
    } else if (pathname.includes('/third')) {
      index = 2
      this.setState({
        defaultSelectedKeys: '/third/ui/button'
      })
    }
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
    // const menuTreeNode = this.renderMenu(menuList[index].menu)

    // this.setState({
    //   menuTreeNode,
    //   defaultSelectedKeys: key
    // })
    // this.getDefaultOpenKeys(key, index)
  }

  
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[this.state.defaultSelectedKeys]}
          style={{ lineHeight: '64px' }}
          onClick={this.handleClick}
        >
          {
            this.props.menuList.map((item, index) => {
            return (
              <Menu.Item key={item.key}>
                <NavLink to={item.key}>{item.topTitle}</NavLink>
              </Menu.Item>
            )
          })
        }
        </Menu>
      </Header>
    );
  }
}

export default IHeader;
