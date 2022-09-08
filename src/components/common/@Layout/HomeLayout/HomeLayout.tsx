import {
  Box,
  BoxProps,
  Center,
  ContainerProps,
  Flex,
  Text,
} from '@chakra-ui/react';

interface HomeLayoutProps {
  title: string | JSX.Element;
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}

const HomeLayout = ({
  //
  title,
  header,
  footer,
  containerProps,
  content,
}: HomeLayoutProps) => {
  return (
    <>
      {header}
      <Center
        justifyContent="start"
        flexDirection="column"
        py="60px"
        {...containerProps}
      >
        <Flex alignItems="center" mt="100px" mb="50px">
          <Text color="primary.500" textStyle="xl" fontWeight="bold">
            {title}
          </Text>
        </Flex>
        {content}
      </Center>
      {footer}
    </>
  );
};

export default HomeLayout