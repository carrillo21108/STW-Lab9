import './Boton.scss'
import React from 'react'

export default function Boton(props){

    const handleClick = () => props.clickHandle(props.name)

    const className = [
        "component-button",
        props.orange ? "orange" : "",
        props.wide ? "wide" : "",
        props.green ? "green" : "",
        props.gray ? "gray" : ""
    ]

    return (
        <div className={className.join(" ").trim()}>
            <button className='btn' onClick={handleClick}>{props.name}</button>
        </div>
    )
}