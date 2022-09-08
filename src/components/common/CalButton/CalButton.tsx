import {Button} from '@chakra-ui/react'
import { MouseEvent } from 'react';

interface CalButtonProps {
  handleCalButtonClick: (val:string) => void,
  content: string,
  w: string,
  h: string
}
const CalButton = ( {handleCalButtonClick, content, w, h}:CalButtonProps ) => {
  return (
    <Button onClick={() => {handleCalButtonClick(content)}} colorScheme="teal" size='sm' variant={"outline"} w={w} h={h} >
      {content}
    </Button>
  )
} 
export default CalButton;