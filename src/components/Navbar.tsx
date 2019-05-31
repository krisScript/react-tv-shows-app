import React, { FunctionComponent } from 'react';
import { Menu } from 'antd';
import SearchBar from './SearchBar/SearchBar';
const Navbar: FunctionComponent = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Menu.Item key="3">
        <SearchBar />
      </Menu.Item>
    </Menu>
  );
};
export default Navbar;
