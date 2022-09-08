import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import CalButton from "../common/CalButton";
import { CALARRAY } from "../../constants/array";
import { MouseEventHandler, useState } from "react";
const CalculatorPage:React.FC = () => {
  const [answer, setAnswer] = useState("")
  const handleCalButtonClick = (e: MouseEventHandler<HTMLButtonElement>) => {
    console.log("e",e)
    switch(e.target.textContent){
      case "AC":
        setAnswer("")
        break
      default:
        setAnswer(prev => prev + e.target.textContent)
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
            {answer}
          </Box>
        </GridItem>
        {CALARRAY.map((val:string) => 
        <GridItem w="100%" h="10">
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