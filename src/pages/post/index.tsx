import React from 'react'
import CalculatorPage from '../../components/CalculatorPage';
import HomeLayout from '../../components/common/@Layout/HomeLayout';
import Header from '../../components/header';
import PostPage from '../../components/PostPage';

const Post:React.FC = () => {
  return (
    <HomeLayout header={<Header imgsrc="/images/post-img.jpg" />} title="포스트 페이지 입니다." content={<PostPage content='asdf' />}/>
  )
}
export default Post;