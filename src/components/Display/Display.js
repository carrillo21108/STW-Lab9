import './Display.scss'
import React from 'react'

export default function Display(props){
    return (
        <div>
            <div>{props.value}</div>
        </div>
    )
}