// 숫자1, 숫자2, 연산자 받아서 연산결과 리턴해주는 함수
export const calculate = (left:string, right:string, expr:string) => {
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
export const getAnswer = (expression:String) => {
  console.log("결과를 계산합니다.")
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
    console.log("곱셈나눗셈제곱 인덱스:",index, ", 곱셈나눗셈제곱 결과:",numAndOp[index-1])
    numAndOp.splice(index, 2)
    index = numAndOp.findIndex((value:string)=> value.search(/[\^%/*]/) !== -1)
  }
  index = numAndOp.findIndex((value:string)=> value.search(/[+-]/) !== -1)
  while(index!=-1){
    numAndOp[index-1] = calculate(numAndOp[index-1], numAndOp[index+1],numAndOp[index]).toString()
    console.log("덧셈뺄셈 인덱스:",index, ", 덧셈뺼셈 결과:",numAndOp[index-1])
    numAndOp.splice(index, 2)
    index = numAndOp.findIndex((value:string)=> value.search(/[+-]/) !== -1)
  }
  if(numAndOp.length === 0) return "Error"
  return numAndOp.pop()!.toString()
}