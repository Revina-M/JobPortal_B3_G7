import { Ictlogo } from '../assets';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'antd';

const { Header, Sider, Content } = Layout;

class DefaultLayout extends React.Component {
    constructor(props){
   super(props);
  this.state = {
    collapsed: false,
  };
}

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
              {this.state.collapsed? (<Ictlogo/>) :(<h1 >Alumni Job Portal</h1>)}
              </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
            <Menu.Item key="/" icon={<UserOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="/profile" icon={<VideoCameraOutlined />}>
            <Link to='/profile'>Profile</Link>
            </Menu.Item>
            <Menu.Item key="/appliedjobs" icon={<UploadOutlined />}>
            <Link to='/appliedjobs'>Applied Jobs</Link>
            </Menu.Item>
            <Menu.Item key="/postjob" icon={<UploadOutlined />}>
            <Link to='/postjob'>Post Jobs</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default DefaultLayout;