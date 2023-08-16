import { useState } from "react"
import "./Form.css"
import Input from "../Inputs"
import OptionList from "../optionList"
import Button from "../button"

const Formulario = (props) => {

    const [nombre,setNombre] = useState("")
    const [puesto,setPuesto] = useState("")
    const [foto,setFoto] = useState("")
    const [equipo,setEquipo] = useState("")

    const [titulo, setTitle] = useState("")
    const [color, setColor] = useState("")

    const { addMember, createTeam } = props

    const sendInfo = (e) => {
        e.preventDefault()
        let userData = {
            nombre,
            puesto,
            foto,
            equipo
        }
        addMember(userData)
    }

    const handleNewTeam = (e) => {
        e.preventDefault()
        createTeam({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={sendInfo}>
            <h2>Añadir participante</h2>
            <Input titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} updateValue={setNombre} />
            <Input titulo="Posición" placeholder="Ingresar posición" required valor={puesto} updateValue={setPuesto} />
            <Input titulo="Foto" placeholder="Ingresar foto" required valor={foto} updateValue={setFoto} />
            <OptionList valor={equipo} updateValue={setEquipo} equipos={props.equipos} />
            <Button>Crear Integrante</Button>
        </form>
        <form onSubmit={handleNewTeam}>
            <h2>Registrar equipo</h2>
            <Input titulo="Titulo" placeholder="Ingresar titulo" required valor={titulo} updateValue={setTitle} />
            <Input titulo="Color" placeholder="Ingresar color en Hex" required valor={color} updateValue={setColor} type="color" />
            <Button>Crear equipo</Button>
        </form>
    </section>
}

export default Formulario