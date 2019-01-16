import React, { Component } from 'react';
import { Layout, Menu } from 'antd'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class IContent extends Component {

  state = {
    menuTreeNode: []
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
