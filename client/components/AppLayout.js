import React from 'react';
import Link from 'next/link';
import { Menu, Input, Icon, Row, Col, Card, Avatar } from 'antd';
import LoginForm from '../components/LoginForm';

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

    <Row>
      <Col xs={24} md={6}>
        {dummy.isLoggedIn ? (
          <Card
            actions={[
              <div key="twit">
                Tweets
                <br />
                {dummy.Post.length}
              </div>,
              <div key="following">
                Following
                <br />
                {dummy.Following.length}
              </div>,
              <div key="follower">
                Followers
                <br />
                {dummy.Followers.length}
              </div>
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
              title={dummy.nickname}
            />
          </Card>
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
