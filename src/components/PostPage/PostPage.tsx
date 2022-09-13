import { Box, Button, ButtonGroup, Center, Grid, GridItem, IconButton, Input, VStack } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, DeleteIcon } from '@chakra-ui/icons'
import CalButton from "../common/CalButton";
import { POSTARRAY, CALARRAY } from "../../constants/array";
import {useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface PostPageProp{
  content:string,
}
// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
const PostPage = (props:PostPageProp) => {
  const [postList, setPostList] = useState(POSTARRAY)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const router = useRouter()
  const addNewPost = () => setPostList(prev => prev.concat([{userId: 1, id:prev.length+1,title,body:content}]))
  const goToPost = (index:number) => router.push(`/post/${index}`)
  return (
      <Box p="20px" border="5px solid teal" >
        <Center flexDirection="column">
          <Input mb="5px" placeholder="제목을 입력해주세요." value={title} onChange={(e) => setTitle(e.target.value)} ></Input>
          <Input mb="5px" placeholder="내용을 입력해주세요." value={content} onChange={(e) => setContent(e.target.value)} ></Input>
          <Button mb="5px" onClick={addNewPost}>새 글 쓰기</Button>
          <VStack spacing={8}>
            {postList.map((value, index)=> 
            <ButtonGroup display="block" w="full" isAttached variant='outline'>
              <Link href={`/post/${index}`}>
                <Button>{value.title}</Button>
              </Link>
              <IconButton aria-label='Add to friends' icon={<DeleteIcon />} />
            </ButtonGroup>
            )}
          </VStack>
        </Center>
      </Box>
  )
}
export default PostPage;