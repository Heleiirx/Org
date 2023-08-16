import './optionList.css'


function OptionList(props){

    //Método map :::> arreglo.map( (equipo, index) => <option><option/>)

    const selectChange = (e) => {
        props.updateValue(e.target.value)
    }

    return <div className='listaOpciones'>
        <label>Equipos</label>
        <select value={props.valor} onChange={selectChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default OptionList