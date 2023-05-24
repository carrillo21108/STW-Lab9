import Big from 'big.js'
import operate from './operadores'
import isNumber from './isNumber'

export default function operaciones(estado,nombreDeBoton){
    if(nombreDeBoton === "AC"){
        return{
            total:null,
            siguiente:'0',
            operador:null
        }
    }
    
    if(isNumber(nombreDeBoton)){
        if(nombreDeBoton === "0" && estado.siguiente === "0")return {}

        if(estado.operador){
            if(!estado.seleccion) return {siguiente:nombreDeBoton,seleccion:true}
            
            const siguiente = estado.siguiente === "0" ? nombreDeBoton:estado.siguiente + nombreDeBoton 
            return {siguiente}
        }

        if(estado.siguiente){
            const siguiente = estado.siguiente === "0" ? nombreDeBoton:estado.siguiente + nombreDeBoton 
            return {siguiente}
        }

        return {siguiente:nombreDeBoton}
    }

    if(nombreDeBoton === "/" || nombreDeBoton === "x" || nombreDeBoton === "+" || nombreDeBoton === "-" || nombreDeBoton === "%"){
        if(estado.siguiente && estado.operador && estado.total){
            return {siguiente:operate(estado.total,estado.siguiente,estado.operador),
                    total:operate(estado.total,estado.siguiente,estado.operador),
                    operador:nombreDeBoton,
                    seleccion:false
            }
        }

        if(estado.siguiente){
            return {total:estado.siguiente,operador:nombreDeBoton}
        }

        return {}
    }

    if(nombreDeBoton === "."){
        if(estado.siguiente.includes(".")) return{}

        return {siguiente:estado.siguiente+"."}
    }

    if(nombreDeBoton === "="){
        if(estado.siguiente && estado.operador && estado.total){
            return {siguiente:operate(estado.total,estado.siguiente,estado.operador),
                    total:null,
                    operador:null,
                    seleccion:false
            }
        }

        return {}
    }

    if(nombreDeBoton === "+/-"){
        if(estado.siguiente) return{siguiente:(-1*parseFloat(estado.siguiente).toString())}

        return {}
    }
}