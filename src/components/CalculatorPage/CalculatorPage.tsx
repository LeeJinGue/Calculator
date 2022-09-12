import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import CalButton from "../common/CalButton";
import { CALARRAY } from "../../constants/array";
import {useState } from "react";

// 숫자1, 숫자2, 연산자 받아서 연산결과 리턴해주는 함수
const calculate = (left:string, right:string, expr:string) => {
  const leftNum:number = Number.parseInt(left)
  const rightNum:number = Number.parseInt(right)
  switch(expr){
    case "+": return leftNum+rightNum
    case "-": return leftNum-rightNum
    case "/": return leftNum/rightNum
    case "%": return leftNum%rightNum
    case "*": return leftNum*rightNum
    case "^": return leftNum**rightNum
    // case ".": return leftNum+rightNum
    default: return leftNum+rightNum
  }
}

// 숫자와 연산자를 배열에 다 때려박는다.
// 곱/나눗셈/제곱 연산자의 인덱스를 구한다.
// 왼쪽 연산자 오른쪽을 계산해서 계산한다.
// 덧셈/뺄셈 연산자의 인덱스도 구하고 계산한다.
const getAnswer = (expression:String) => {
  let nums = ""
  let numAndOp:Array<string> = []
  for(const str of Array.from(expression)){
    if(str.match(/\d/)) {
      nums+=str
      continue
    }
    numAndOp.push(nums)
    numAndOp.push(str)
    nums = ""
  }
  numAndOp.push(expression[expression.length-1])

  let index = numAndOp.findIndex((value:string)=> value.search(/[\^%/*]/) !== -1)
  while(index!=-1){
    numAndOp[index-1] = calculate(numAndOp[index-1], numAndOp[index+1],numAndOp[index]).toString()
    numAndOp.splice(index, 2)
    index = numAndOp.findIndex((value:string)=> value.search(/[\^%/*]/) !== -1)
  }
  index = numAndOp.findIndex((value:string)=> value.search(/[+-]/) !== -1)
  while(index!=-1){
    numAndOp[index-1] = calculate(numAndOp[index-1], numAndOp[index+1],numAndOp[index]).toString()
    numAndOp.splice(index, 2)
    index = numAndOp.findIndex((value:string)=> value.search(/[+-]/) !== -1)
  }
  if(numAndOp.length === 0) return "Error"
  return numAndOp.pop()!.toString()
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