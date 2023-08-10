import { useState } from "react"
import "./formulario.css"
import Campo from "../../campo"
import ListaOpciones from "../../lista-opciones/Lista-Opciones"
import Boton from "../../boton/boton"
 
const Formulario = (props) =>{

    const [nombre,actualizarNombre]= useState("")
    const [puesto,actualizarPuesto]= useState("")
    const [foto,actualizarFoto]= useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registarColaborador ,crearEquipo} = props

    const envio = (evento) =>{
        evento.preventDefault()
        let datosAEnviar = {
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
        registarColaborador(datosAEnviar)
            
        
    }

    const manejarNuevEquipo = (e)=>{
        e.preventDefault()
        crearEquipo({titulo,colorPrimario:color})
    }

    return <section className="formulario">
        <form onSubmit={envio}>
            <h2 className="">Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                title="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo 
                title="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />

            <Campo 
                title="Foto"
                placeholder="Ingresa enalace de foto" 
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos ={props.equipos}
            />
             <Boton>Agrear un compañero</Boton>
        </form>
        <form onSubmit={manejarNuevEquipo}>
            <h2 className="">Rellena el formulario para crear el equipo.</h2>
            <Campo
                title="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo
                title="Color" 
                placeholder="Ingresar el color en Hex" 
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>Registrar Equipo</Boton>
            </form>
    </section>
}

export default Formulario