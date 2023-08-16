import "./card.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from"react-icons/ai"

const Member = (props) => {

    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const { colorPrimario, deleteMember, like } = props

    return <div className="member">
        <AiFillCloseCircle onClick={()=>deleteMember(id)} className="eliminar"/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} ></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ?  <AiFillHeart color="#426DB4" onClick={() => like(id)}/> : <AiOutlineHeart color="#426DB4" onClick={() => like(id)}/>}
        </div>
    </div>
}


export default Member