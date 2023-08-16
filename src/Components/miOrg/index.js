import { useState } from "react"
import "./miOrg.css"

const MiOrg = (props) => {

    //Estado - Hooks
    //useState

    return <section className="OrgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/boton.svg" alt="add" onClick={props.switchForm}/>
    </section>
}

export default MiOrg