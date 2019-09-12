import React from 'react'
import { Card, Avatar } from 'antd'



const UserProfile = () => {
    return (
        <div>
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
        </div>
    )
}

export default UserProfile
