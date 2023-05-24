import './Boton.scss'
import React from 'react'

export default function Boton(props){

    const handleClick = () => props.clickHandle(props.name)

    return (
        <div>
            <button onClick={handleClick}>{props.name}</button>
        </div>
    )
}