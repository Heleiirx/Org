import { useState } from "react"
import "./Inputs.css"

function Input(props) {
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion con valor por defecto
    const { type="text" } = props

    const inputChange = (e) => {
        props.updateValue(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} required={props.required} value={props.valor} onChange={inputChange} type={type} />
    </div>
}

export default Input