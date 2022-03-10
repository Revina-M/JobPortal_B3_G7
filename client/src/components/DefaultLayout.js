import { Ictlogo } from "../assets";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BankOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "../redux/actions/userActions";
import banr1 from '../assets/19873.jpg';
import './DefaultLayout.css'
import { Footer } from "antd/lib/layout/layout";
const { Header, Sider, Content } = Layout;

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="flex2">
            <Ictlogo />
            <h2 className="hometitle">ALUMNI JOB PORTAL</h2>
          </div>

          <div className="flex1">
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[window.location.pathname]}
            >
              <Menu.Item key="/">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="/profile">
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="/appliedjobs" >
                <Link to="/appliedjobs">Applied Jobs</Link>
              </Menu.Item>
              <Menu.Item key="/postjob">
                <Link to="/postjob">Post Jobs</Link>
              </Menu.Item>
              <Menu.Item key="/posted">
                <Link to="/posted">Posted Jobs</Link>
              </Menu.Item>
              <Menu.Item key="/login">
                <Link to="/login">Log In</Link>
              </Menu.Item>
              <Menu.Item key="/register">
                <Link to="/register">Sign Up</Link>
              </Menu.Item>
              {/* <Menu.Item>LogOut</Menu.Item> */}
            </Menu>
          </div>
        </Header>
        <br></br>
        <br></br>

        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
          
          <div className="footer">
                <h5 id="footername">ictak.</h5>
          </div>
          
        
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;
