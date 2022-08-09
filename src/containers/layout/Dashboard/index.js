import React, { useState } from 'react';  
import { Button, Breadcrumb, Layout, Menu, Typography } from 'antd';
import "./style.css"
import {
    DesktopOutlined,
    SettingOutlined,
    AppstoreOutlined,
    MenuOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';

  
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const items = [
  {
    key: 'setting',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'app',
    icon: <DesktopOutlined />,
    title :'procconvert work offline'
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        log in
      </a>
    ),
    key: 'login',
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Sign up
      </a>
    ),
    key: 'signup',
  },
  {
    key: 'SubMenu',
    icon: <MenuOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  }
];


const Dashboard = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo">dsfs</div>
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={onClick} selectedKeys={[current]}
          items={items}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
          textAlign: 'center',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
            <Title>Add PDF page numbers</Title>
            <h2>
              Add page numbers into PDFs with ease. Choose your positions, dimensions, typography.
            </h2>
          <Button type="danger">select PDF file</Button>
          <div>
          or drop PDF here</div>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2022 Created by procconvert
      </Footer>
    </Layout>
  );
};
  
export default Dashboard;