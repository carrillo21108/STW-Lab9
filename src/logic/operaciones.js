import operate from './operadores'
import isNumber from './isNumber'

export default function operaciones(estado, nombreDeBoton) {
  if (nombreDeBoton === 'C') {
    return {
      total: null,
      siguiente: '0',
      operador: null,
    }
  }

  if ((isNumber(nombreDeBoton) || nombreDeBoton === '.' || nombreDeBoton === '+/-')) {
    if (!estado.operador) if (estado.siguiente.length >= 9) return {}
    if (estado.seleccion) if (estado.siguiente.length >= 9) return {}
  }

  if (isNumber(nombreDeBoton)) {
    if (nombreDeBoton === '0' && estado.siguiente === '0') return {}

    if (estado.operador) {
      if (!estado.seleccion) return { siguiente: nombreDeBoton, seleccion: true }

      const siguiente = estado.siguiente === '0' ? nombreDeBoton : estado.siguiente + nombreDeBoton
      return { siguiente }
    }

    if (estado.siguiente) {
      const siguiente = estado.siguiente === '0' || estado.siguiente === 'ERROR' ? nombreDeBoton : estado.siguiente + nombreDeBoton
      return { siguiente }
    }

    return { siguiente: nombreDeBoton }
  }

  if (nombreDeBoton === '/' || nombreDeBoton === 'x' || nombreDeBoton === '+' || nombreDeBoton === '-' || nombreDeBoton === '%') {
    if (estado.siguiente === 'ERROR') return {}

    if (estado.siguiente && estado.operador && estado.total) {
      const operacion = operate(estado.total, estado.siguiente, estado.operador)
      if (operacion === 'ERROR') {
        return {
          siguiente: 'ERROR', total: null, operador: null, seleccion: false,
        }
      }
      return {
        siguiente: operacion,
        total: operacion,
        operador: nombreDeBoton,
        seleccion: false,
      }
    }

    if (estado.siguiente) {
      return { total: estado.siguiente, operador: nombreDeBoton }
    }

    return {}
  }

  if (nombreDeBoton === '.') {
    if (estado.siguiente === 'ERROR') return {}

    if (estado.operador) {
      if (estado.siguiente.includes('.')) return {}

      if (!estado.seleccion) return { siguiente: '0.', seleccion: true }
    }

    if (estado.siguiente.includes('.')) return {}

    return { siguiente: `${estado.siguiente}.` }
  }

  if (nombreDeBoton === '=') {
    if (estado.siguiente && estado.operador && estado.total) {
      const operacion = operate(estado.total, estado.siguiente, estado.operador)
      if (operacion > 999999999) {
        return {
          siguiente: 'ERROR', total: null, operador: null, seleccion: false,
        }
      }
      if (operacion.length > 9) {
        return {
          siguiente: operacion.substring(0, 9), total: null, operador: null, seleccion: false,
        }
      }

      return {
        siguiente: operacion,
        total: null,
        operador: null,
        seleccion: false,
      }
    }

    return {}
  }

  if (nombreDeBoton === '+/-') {
    if (estado.siguiente === 'ERROR') return {}

    if (estado.siguiente) return { siguiente: ((-1 * parseFloat(estado.siguiente)).toString()) }

    return {}
  }

  return null
}
