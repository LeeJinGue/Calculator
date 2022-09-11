import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import CalButton from "../common/CalButton";
import { CALARRAY } from "../../constants/array";
import { MouseEventHandler,MouseEvent, useState } from "react";
const getAnswer = (expression:string) => {
  const nums = expression.split(/\D/)
  const operators = expression.split(/[\d]+/)
  // 1. 숫자를 모아둔 nums배열
  // 2. 연산자를 모아둔 operators배열
  operators.pop()
  operators.shift()
  // 연산자 split하면 앞,뒤에 공백 붙어서 하나씩 제거
  let result:number = 0
  nums.forEach((val, index) => {
    if(index === 0) result = Number.parseInt(nums[0])
    else{
      switch(operators[index-1]){
        case "+":
          // console.log(`덧셈: ${result} + ${nums[index]}`)
          result += Number.parseInt(nums[index])
          break;
        case "-":
          // console.log(`뺄셈: ${result} - ${nums[index]}`)
          result -= Number.parseInt(nums[index])
          break;
        case "*":
          // console.log(`곱셈: ${result} * ${nums[index]}`)
          result *= Number.parseInt(nums[index])
          break;
        case "/":
          // console.log(`나눗셈: ${result} / ${nums[index]}`)
          result /= Number.parseInt(nums[index])
          break;
        case "%":
          // console.log(`나눗셈 나머지: ${result} % ${nums[index]}`)
          result %= Number.parseInt(nums[index])
          break;
        case "^":
          // console.log(`제곱: ${result} ^ ${nums[index]}`)
          result **= Number.parseInt(nums[index])
          break;
        case ".":
          const right=Number.parseInt(nums[index])/10**(nums[index].length)
          console.log(`소숫점: ${result}+${right}`)
          result += right;
          break;
      }
    }
  })
  return result.toString();
}
const CalculatorPage:React.FC = () => {
  const [answer, setAnswer] = useState("")
  const handleCalButtonClick = (val:string) => {
    switch(val){
      case "AC":  // AC : All Clear 다 지우기
        setAnswer("")
        break
      case "DEL":  // DEL : Delete 하나 지우기
        setAnswer(prev => prev.substring(0, prev.length-1))
        break
      case "=":  // = : 결과
        setAnswer(prev => getAnswer(prev))
        break
      default:  // default: 숫자들 0~9
        setAnswer(prev => prev + val)
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