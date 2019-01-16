import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import './index.less';

const { Header } = Layout

class IHeader extends Component {
  state = {
    collapsed: 'menu-unfold'
  }

  toggle = () => {
    console.log('toggle')
  }
  
  render() {
    return (
      <Header style={{ background: '#fff', padding: 0, position: 'fixed' }}>
        <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
      </Header>
    );
  }
}

export default IHeader;
