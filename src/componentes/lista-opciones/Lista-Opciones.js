import "./Lista-Opciones.css"

const ListaOpciones = (props) =>{

    
    
    const manejarCambio = (e) =>{
        console.log("Cambio",e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return<div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Selecionar equipo</option>
           {props.equipos.map((equipos,index)=><option key={index} value={equipos} >{equipos}</option>)}
        </select>
    </div>
}
export default ListaOpciones