import {
  Box,
  BoxProps,
  Center,
  Container,
  ContainerProps,
  Flex,
  Text,
} from '@chakra-ui/react';

interface HeaderProps{
  imgsrc:string,
}

const Header = (props:HeaderProps) => {
  return (
    <Center justifyContent="start"
    flexDirection="column"
    mt="20px" mb="20px">
        <img src={props.imgsrc} width="100px"></img>
    </Center>
  )
}
export default Header