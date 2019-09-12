import React from 'react'
import {Button, Form, Input } from 'antd'


const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
      User:{
        id: 1,
        nickname: 'MK',
      },
      content: '1st Post',
      img:'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/oqtafyt5ktw-ilya-pavlov-796x532.jpg'
    }],
  };
  
const PostForm = () => {
    return (
        <Form style={{ marginTop: 20, marginBottom: 30 }} encType="multipart/form-data">
      <Input.TextArea
        maxLength={140}
        placeholder="so what interesting thing happened to you?"
      />
      <div>
        <input type="file" multiple hidden />
        <Button>Image Upload</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          Tweet
        </Button>
      </div>
      <div>
        {dummy.imagePaths.map((v, i) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img
              src={`http://localhost:3065/${v}`}
              style={{ width: 200 }}
              alt={v}
            />
            <div>
              <Button>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
    )
}

export default PostForm
