import { useState } from "react"
import "./campo.css"

const Campo = (props)=>{
    const [valor,actualizarValor] = useState("")
    const placeHolderModificado =`${props.placeholder}... `

    const { type = "text" } = props


    const manejarCambio  = (e)=>{
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.title}</label>
        <input 
            placeholder= {placeHolderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo