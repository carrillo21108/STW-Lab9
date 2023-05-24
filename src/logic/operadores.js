import Big from 'big.js'

export default function operate(operandoUno,operandoDos,operador){
    const uno = Big(operandoUno || "0")
    const dos = Big(operandoDos || (operador === "/" || operador === "x" ? "1":"0"))

    if(operador === "+") return uno.plus(dos).toString()
    else if(operador === "-") return uno.minus(dos).toString()
    else if(operador === "x") return uno.times(dos).toString()
    else if(operador === "%") return uno.mod(dos).toString()
    else if(operador === "/") if(dos===0){

        alert("No se puede dividir por cero")
    }else return uno.div(dos).toString()
}