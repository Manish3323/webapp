import * as React from 'react'
import {MouseEventHandler} from "react";
type ButtonProps = {
    style: {},
    onClick: MouseEventHandler,
    value: string
}
export const Button = (props: ButtonProps) => {
    return <button style={props.style} onClick={props.onClick}>{props.value}</button>
}