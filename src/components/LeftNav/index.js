import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './index.less';

const { Sider } = Layout;

class NavLeft extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div className="nav-left">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width="240"
          theme="light"
        >
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    );
  }
}

export default NavLeft;
