import { Box, Button, Center, Grid, GridItem, Link } from "@chakra-ui/react";
import CalButton from "../common/CalButton";
import { CALARRAY } from "../../constants/array";
import {useState } from "react";
import { ROUTES } from "../../constants/routes";
interface MainPageProp{
  content:string,
}
const MainPage = (props:MainPageProp) => {
  return (
  <Box alignItems="center" border={"3px solid teal"} p="20px">
    <Center flexDirection="column">
      <Button mb="10px"><Link href={ROUTES.CALCULATOR}>계산기</Link></Button>
      <Button><Link href={ROUTES.POST}>포스트</Link></Button>
    </Center>
  </Box>
  )
}
export default MainPage;