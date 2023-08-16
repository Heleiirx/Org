import Member from "../card"
import "./team.css"
import hexToRgba from 'hex-to-rgba';

function Team(props) {  
    //DESTRUCTURACIÓN 

    const { colorPrimario, colorSecundario, titulo, id} = props.datos
    const { members, deleteMember, updateColor, like } = props
    const obj = { backgroundColor: hexToRgba(colorPrimario, 0.6) }
    const titleStyle ={borderColor: colorPrimario}

    //Fragments jsx <></>
    return <>
        { members.length > 0 && <section className="team" style={obj}>
            <input className="inputColor" type="color" value={colorPrimario} onChange={(event) => {updateColor(event.target.value, id)}} />
            <h3 style={titleStyle}>{titulo}</h3>
            <div className="members">
                {
                members.map((member, index) => <Member datos={member} key={index} colorPrimario={colorPrimario} deleteMember={deleteMember} like={like} />) 
                }
            </div>
        </section>}
    </>
}

export default Team