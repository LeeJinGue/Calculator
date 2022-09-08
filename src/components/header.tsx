import {
  Box,
  BoxProps,
  Center,
  Container,
  ContainerProps,
  Flex,
  Text,
} from '@chakra-ui/react';

const Header = () => {
  return (
    <Center justifyContent="start"
    flexDirection="column"
    mt="20px" mb="20px">
        <img src="/images/calculator-img.png" width="100px"></img>
    </Center>
  )
}
export default Header