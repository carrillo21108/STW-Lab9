import './Panel.scss'
import React from 'react'
import Boton from '../Boton/Boton'

export default function Panel(props) {
  const handleClick = (nombreDeBoton) => props.clickHandle(nombreDeBoton)

  return (
    <div className="component-button-panel">
      <div>
        <Boton name="C" clickHandle={handleClick} />
        <Boton name="+/-" clickHandle={handleClick} />
        <Boton name="%" clickHandle={handleClick} />
        <Boton name="/" clickHandle={handleClick} orange />
      </div>
      <div>
        <Boton name="7" clickHandle={handleClick} />
        <Boton name="8" clickHandle={handleClick} />
        <Boton name="9" clickHandle={handleClick} />
        <Boton name="x" clickHandle={handleClick} orange />
      </div>
      <div>
        <Boton name="4" clickHandle={handleClick} />
        <Boton name="5" clickHandle={handleClick} />
        <Boton name="6" clickHandle={handleClick} />
        <Boton name="-" clickHandle={handleClick} orange />
      </div>
      <div>
        <Boton name="1" clickHandle={handleClick} />
        <Boton name="2" clickHandle={handleClick} />
        <Boton name="3" clickHandle={handleClick} />
        <Boton name="+" clickHandle={handleClick} orange />
      </div>
      <div>
        <Boton name="0" clickHandle={handleClick} wide />
        <Boton name="." clickHandle={handleClick} />
        <Boton name="=" clickHandle={handleClick} gray />
      </div>
    </div>
  )
}
