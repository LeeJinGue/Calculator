import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import CalButton from "../common/CalButton";
import { CALARRAY } from "../../constants/array";
import {useState } from "react";
import { useDispatch } from "react-redux";
import useAppStore from "../../features/useAppStore";
import { calculatorSliceActions } from "../../features/calculator/calculatorSlice";

const CalculatorPage:React.FC = () => {
  const dispatch = useDispatch()
  const {CALCULATOR:answer } = useAppStore(state => state)

  const handleCalButtonClick = (val:string) => {
    switch(val){
      case "AC":  // AC : All Clear 다 지우기
        dispatch(calculatorSliceActions.allClear())
        break
      case "DEL":  // DEL : Delete 하나 지우기
        dispatch(calculatorSliceActions.delete())
        break
      case "=":  // = : 결과
        dispatch(calculatorSliceActions.setResult())
        break
      default:  // default: 숫자들 0~9
        dispatch(calculatorSliceActions.addResult(val))
        break
    }
  }
  return (
      <Box p="20px" border="5px solid teal" >
      <Grid templateColumns='repeat(4, 1fr)' gap={5} >
        <GridItem colSpan={4} w="100%" > 
          <Box display={"flex"}
          alignItems="center" 
          justifyContent="flex-end"
          w="100%" h="10" 
          pr="5px"
          border={"3px solid teal"}>
            {answer.result}
          </Box>
        </GridItem>
        {CALARRAY.map((val:string) => 
        <GridItem w="100%" h="10" key={val}>
          <Center>
            <CalButton content={val} 
            handleCalButtonClick={handleCalButtonClick} 
            w='50px' h='37px'/>
          </Center>
        </GridItem>
        )
        }
      </Grid>
      </Box>
  )
}
export default CalculatorPage;