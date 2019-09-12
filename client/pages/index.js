import React from 'react';
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'


const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User:{
      id: 1,
      nickname: 'MK',
    },
    content: '1st Post',
    img:'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/oqtafyt5ktw-ilya-pavlov-796x532.jpg',
    createdAt: {},
  }],
};

const Home = () => (
  <div>
    {dummy.isLoggedIn && <PostForm />}
    {dummy.mainPosts.map((c)=>(
      <PostCard key={c} post={c}/>
    ))}
  </div>
);

export default Home;
