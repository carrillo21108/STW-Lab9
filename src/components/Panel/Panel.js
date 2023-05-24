import './Panel.scss'
import React from 'react'
import Boton from '../Boton/Boton'

export default function Panel(props){

    const handleClick = nombreDeBoton => props.clickHandle(nombreDeBoton);

    return (
        <div>
            <div>
                <Boton name="AC" clickHandle={handleClick}/>
                <Boton name="+/-" clickHandle={handleClick}/>
                <Boton name="%" clickHandle={handleClick}/>
                <Boton name="/" clickHandle={handleClick}/>
            </div>
            <div>
                <Boton name="7" clickHandle={handleClick}/>
                <Boton name="8" clickHandle={handleClick}/>
                <Boton name="9" clickHandle={handleClick}/>
                <Boton name="x" clickHandle={handleClick}/>
            </div>
            <div>
                <Boton name="4" clickHandle={handleClick}/>
                <Boton name="5" clickHandle={handleClick}/>
                <Boton name="6" clickHandle={handleClick}/>
                <Boton name="-" clickHandle={handleClick}/>
            </div>
            <div>
                <Boton name="1" clickHandle={handleClick}/>
                <Boton name="2" clickHandle={handleClick}/>
                <Boton name="3" clickHandle={handleClick}/>
                <Boton name="+" clickHandle={handleClick}/>
            </div>
            <div>
                <Boton name="0" clickHandle={handleClick}/>
                <Boton name="." clickHandle={handleClick}/>
                <Boton name="=" clickHandle={handleClick}/>
            </div>
        </div>
    )
}