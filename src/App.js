import React, { Component } from 'react';

// import Header from './components/Header'
// import LeftNav from './components/LeftNav'
import menuList from './config/menuConfig'
import { NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import './App.css';

import { connect } from 'react-redux'
import { changeIndex } from './redux/action'


const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;


class App extends Component {

  state = {
    menuTreeNode: [],
    defaultSelectedKeys: ''
  }

  componentWillMount () {
    let index
    let path = this.props.match.path
    if (path === '/first') {
      index = 0
    } else if (path === '/second') {
      index = 1
    } else if (path === '/third') {
      index = 2
    }
    const menuTreeNode = this.renderMenu(menuList[index].menu)
    const defaultSelectedKeys = this.props.location.pathname
    this.setState({
      menuTreeNode,
      defaultSelectedKeys
    })
    console.log(this.props)
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

  handleClick (index) {
    const { dispatch } = this.props
    const menuTreeNode = this.renderMenu(menuList[index].menu)
    this.setState({
      menuTreeNode
    })
    dispatch(changeIndex(index))
    // console.log(this.props.index)    
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[this.state.defaultSelectedKeys]}
            style={{ lineHeight: '64px' }}
          >
           {
             menuList.map((item, index) => {
              return (
                <Menu.Item onClick={() => this.handleClick(index)} key=        {item.key}>
                  <NavLink to={item.key}>{item.topTitle}</NavLink>
                </Menu.Item>
              )
            })
          }
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={[this.state.defaultSelectedKeys]}
              defaultOpenKeys={['sub1']}
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
