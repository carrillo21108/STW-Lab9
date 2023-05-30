import Big from 'big.js'

export default function operate(operandoUno, operandoDos, operador) {
  const uno = Big(operandoUno || '0')
  const dos = Big(operandoDos || (operador === '/' || operador === 'x' ? '1' : '0'))

  if (operador === '+') return uno.plus(dos).toString()
  if (operador === '-') return uno.minus(dos).toString()
  if (operador === 'x') return uno.times(dos).toString()
  if (operador === '%') return uno.mod(dos).toString()
  if (operador === '/') {
    if (operandoDos === '0' || operandoDos === '0.') {
      return 'ERROR'
    }
    return uno.div(dos).toString()
  }

  return null
}
