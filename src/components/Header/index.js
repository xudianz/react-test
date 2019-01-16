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

  handleClick = () => {

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
    );
  }
}

// const mapDispatchToProps = (state) => {
//   return {
//     change
//   }
// }

export default IHeader;
