import { Box, Button, ButtonGroup, Center, Grid, GridItem, IconButton, Input, VStack } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, DeleteIcon } from '@chakra-ui/icons'
import CalButton from "../common/CalButton";
import { POSTARRAY, CALARRAY } from "../../constants/array";
import {MouseEventHandler, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface PostPageProp{
  content:string,
}

const PostPage = (props:PostPageProp) => {
  const [postList, setPostList] = useState(POSTARRAY)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const router = useRouter()
  const addNewPost = () => {
    setTitle("")
    setContent("")
    setPostList(prev => prev.concat([{userId: 1, id:prev.length+1,title,body:content}]))
  }

  return (
      <Box p="20px" border="5px solid teal" >
        <Center flexDirection="column">
          <Input mb="5px" placeholder="제목을 입력해주세요." value={title} onChange={(e) => setTitle(e.target.value)} ></Input>
          <Input mb="5px" placeholder="내용을 입력해주세요." value={content} onChange={(e) => setContent(e.target.value)} ></Input>
          <Button mb="5px" onClick={addNewPost}>새 글 쓰기</Button>
          <VStack spacing={8}>
            {postList.map((value, index)=> 
            <ButtonGroup key={value.id} display="block" w="full" isAttached variant='outline'>
              <Link href={`/post/${index}?title=${value.title}`}>
                <Button>{value.title}</Button>
              </Link>
              <IconButton onClick={(e) => setPostList(prev => prev.filter((_,pIndex)=>index !== pIndex))} aria-label='Delete Post' icon={<DeleteIcon />} />
            </ButtonGroup>
            )}
          </VStack>
        </Center>
      </Box>
  )
}
export default PostPage;