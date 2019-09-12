import React from 'react';
import Link from 'next/link';
import { Menu, Input, Icon, Row, Col, Card, Avatar } from 'antd';
import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';

const { Search } = Input;
const dummy = {
  nickname: 'MK',
  Post: [],
  Following: [],
  Followers: [],
  isLoggedIn: false
};

const AppLayout = ({ children }) => (
  <div>
    {/* NAV BAR */}
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link href="/">
          <a>
            <Icon type="yuque" style={{ fontSize: 25 }} />
            Node Bird
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="profile">
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="mail">
        <Search enterButton style={{ verticalAlign: 'middle' }} />
      </Menu.Item>
    </Menu>

    {/* Body Column */}

    <Row gutter={10}>
      <Col xs={24} md={6} style={{padding:10}}>
        {dummy.isLoggedIn ? (
          <UserProfile />
        ) : (
          <LoginForm />
        )}
      </Col>

      <Col xs={24} md={12}>
        {children}
      </Col>

      <Col xs={24} md={6}>
        3rd
      </Col>
    </Row>
  </div>
);

export default AppLayout;
