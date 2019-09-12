import React from 'react'
import {Icon, Card, Button, Avatar} from 'antd'
import PropTypes from 'prop-types'

const PostCard = ({post}) => {
    return (
        <div>
            <Card key = {post.createdAt}
            cover = {post.img && <img src={post.img} alt='example'/>}
            actions = {
              [
                <Icon type='retweet' key='retweet' />,
                <Icon type='heart' key='heart' />,
                <Icon type='message' key='message' />,
                <Icon type='ellipsis' key='ellipsis' />
              ]}
              extra={<Button>Follow</Button>}>
                <Card.Meta
                avatar={<Avatar>{post.User.nickname}</Avatar>}
                title={post.User.nickname}
                description={post.content} />
      </Card>
        </div>
    )
}

PostCard.propTypes ={
    post:PropTypes.shape({
    User: PropTypes.object,
    content:PropTypes.string,
    img:PropTypes.string,
    createdAt:PropTypes.object
    })

}


export default PostCard
