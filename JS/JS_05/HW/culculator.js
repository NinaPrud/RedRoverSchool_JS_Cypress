// // 2. Create calculator

let num1 = 10
let num2 = 0
let result

let operator = "/"


if (operator == "+"){
  result = num1 + num2
  document.write(`${num1} + ${num2} = ${result}`)
}
  else if (operator == "-"){
  result = num1 - num2
  document.write(`${num1} - ${num2} = ${result}`)
}
  else if (operator == "*"){
  result = num1 * num2
  document.write(`${num1} * ${num2} = ${result}`)
}
  else if (operator == "/"){
  result = num1 / num2
    {
      if (num2==0) {document.write("На ноль делить недьзя!")}
      else {document.write(`${num1} / ${num2} =${result}`)}
    }    
}
  else {
    document.write("Error")
  }

switch(operator){
  case "+":
    result = num1 + num2
    document.write("<br>",`${num1} + ${num2} = ${result}`)
    break
  case "-":
    result = num1 - num2
    document.write("<br>",`${num1} - ${num2} = ${result}`)
    break
  case "*":
    result = num1 * num2
    document.write("<br>",`${num1} * ${num2} = ${result}`)
    break
  case "/":
    if(num2==0){
    document.write("<br>","На ноль делить нельзя!")  
    }
    else{
    result = num1 / num2
    document.write("<br>",`${num1} / ${num2} = ${result}`)}
    break
  default: document.write("<br>","Извините, данная операция не поддерживается!")    
}
