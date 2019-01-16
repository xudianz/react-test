import React, { Component } from 'react';
import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import menuList from '../../config/menuConfig'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class IContent extends Component {

  state = {
    menuTreeNode: []
  }

  componentWillMount () {
    console.log(this.props)
    const menuTreeNode = this.renderMenu(menuList[0].menu)
    this.setState({
      menuTreeNode
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
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      )
    })
  }

  render () {
    return (
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            { this.state.menuTreeNode }
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 0 12px 12px' }}>
          <Content className="content">
            Content
            <h1>lkfjsdlfsjdfldkfj</h1>
            <h1>lkfjsdlfsjdfldkfj</h1>

            <h1>lkfjsdlfsjdfldkfj</h1>
            <h1>lkfjsdlfsjdfldkfj</h1>
            <h1>lkfjsdlfsjdfldkfj</h1>
            <h1>lkfjsdlfsjdfldkfj</h1>
            <h1>lkfjsdlfsjdfldkfj</h1>
            <h1>lkfjsdlfsjdfldkfj</h1>
            
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default IContent
