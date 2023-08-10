import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props)=>{

    // const [mostrar,actualizarMostrar] = useState(true)
    // const manejarClick = ()=>{
    //     console.log("Ocultar elemento")
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="OrgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/Boton-1.png" alt="Add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg