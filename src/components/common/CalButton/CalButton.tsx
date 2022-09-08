import {Button} from '@chakra-ui/react'
import { MouseEventHandler } from 'react';

interface CalButtonProps {
  handleCalButtonClick?: (e: MouseEventHandler<HTMLButtonElement>) => void,
  content: string,
  w: string,
  h: string
}
const CalButton = ( {handleCalButtonClick, content, w, h}:CalButtonProps ) => {
  return (
    <Button onClick={handleCalButtonClick} colorScheme="teal" size='sm' variant={"outline"} w={w} h={h} >
      {content}
    </Button>
  )
} 
export default CalButton;