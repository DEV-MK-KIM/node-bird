import React from 'react';
import NicknameEditForm from '../components/NicknameEditForm'
import { Button, List, Card, Icon } from 'antd';

const Profile = () => {
  return (
    <>
    
      <NicknameEditForm />

        <List style={{marginBottom: 20, }} grid={{ gutter:4, xs:2, md:3}}
        size="small"
        header={<div>Following</div>}
        loadMore={<Button style={{ width: '100%' }}>See more</Button>}
        bordered
        dataSource={['MK','KIM']}
        renderItem={item => (
          <List.Item style={{marginTop:20}}>
          <Card actions={[<Icon key='user-delete' type='user-delete'/>]} ><Card.Meta description={item} /></Card>
          </List.Item>
        )}
        />


        <List style={{marginBottom: 20, }} grid={{ gutter:4, xs:2, md:3}}
        size="small"
        header={<div>Followers</div>}
        loadMore={<Button style={{ width: '100%' }}>See more</Button>}
        bordered
        dataSource={['person1','person2', 'person3']}
        renderItem={item => (
          <List.Item style={{marginTop:20}}>
          <Card actions={[<Icon key='user-delete' type='user-delete'/>]} ><Card.Meta description={item} /></Card>
          </List.Item>
        )}
        />

    </>
  );
};

export default Profile;
