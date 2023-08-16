import { useState } from 'react';
import { v4 as uuid} from "uuid"
import './App.css';
import Header from './Components/Header/header';
import Formulario from './Components/Form/Form';
import MiOrg from './Components/miOrg';
import Team from './Components/team';
import Footer from './Components/footer';

function App() {
  const [showForm, setShowForm] = useState(true)
  const [members, setMembers] = useState([{  
    id: uuid(),
    equipo: "Fukurodani",
    foto: "https://i.pinimg.com/736x/19/3a/c0/193ac099ebe437d2e7432d9f8f4b5d68.jpg",
    nombre: "Bokuto Koutaro",
    puesto: "Ala",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Karasuno",
    foto: "https://www.nautiljon.com/images/perso/00/87/kageyama_tobio_10278.webp",
    nombre: "Tobio Kageyama",
    puesto: "Colocador",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Karasuno",
    foto: "https://64.media.tumblr.com/c3cf51b33841a264b1846625267890c0/tumblr_ou4osvAq1I1vy2tgqo6_250.jpg",
    nombre: "Hinata Shoyo",
    puesto: "Centro",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Shiratorizawa",
    foto: "https://assets.puzzlefactory.com/puzzle/467/081/original.jpg",
    nombre: "Ushijima Wakatoshi",
    puesto: "Ala",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Nekoma",
    foto: "https://i.pinimg.com/474x/b6/9d/95/b69d95b50b15744b16d893209c6cbd80.jpg",
    nombre: "Kozume Kenma",
    puesto: "Colocador",
    fav: false
  }
])
  const [teams, setTeams] = useState([
        
    {
        id: uuid(),
        titulo:'Shiratorizawa',
        colorPrimario: "#A94E6D",
        colorSecundario: "#FFA8F6"
    },
    {
        id: uuid(),
        titulo:'Nekoma',
        colorPrimario: "#D2101B",
        colorSecundario: "#FFB4BB"
    },
    {
        id: uuid(),
        titulo:'Karasuno',
        colorPrimario: "#F6923D",
        colorSecundario: "#FFC8A9"
    },
    {
        id: uuid(),
        titulo:'Fukurodani',
        colorPrimario: "#FFEC3A",
        colorSecundario: "#FFEAA9"
    },
    {
        id: uuid(),
        titulo:'Johzenji',
        colorPrimario: "#EDAF24",
        colorSecundario: "#FFFFA9"
    },
    {
        id: uuid(),
        titulo:'Date',
        colorPrimario: "#304444",
        colorSecundario: "#CBFFAA"
    },
    {
        id: uuid(),
        titulo:'Aoba Jósai',
        colorPrimario: "#6DD2C0",
        colorSecundario: "#A8F0FE"
    }
])

  const switchForm = () => {
    setShowForm(!showForm)
  }

  const addMember = (member) => {
    //Spread operator
    setMembers([...members, member])
  }

  const deleteMember = (id) => {
    console.log("Delete :::>", id)
    const newMembers = members.filter((member) => member.id !== id)
    setMembers(newMembers)
  }
  //Ternario :::> condicion? seMuestra : noSeMuestra
  //Corto circuito ::::> condicion && seMuestra

  const updateColor = (color, id) => {
    const teamsUpdated = teams.map((team) => {
      if(team.id === id){
        team.colorPrimario = color
      }
      return team
    })
    
    setTeams(teamsUpdated)
  }

  const createTeam = (newTeam) => {
    console.log(newTeam)
    setTeams([...teams, {...newTeam, id: uuid()}])
  }

  const like = (id) => {
    console.log(`Like :::> ${id}`)
    const updateMembers = members.map((member)=>{
      if (member.id === id){
        member.fav = !member.fav
      }
      return member
    })
    setMembers(updateMembers)
  }

  return (
    <div>
      <Header className="App-header"/>
      {
        showForm && <Formulario 
          equipos={teams.map((team) => team.titulo)} 
          addMember={addMember}
          createTeam={createTeam}
        />
      }
      <MiOrg switchForm={switchForm}  />
      {
        teams.map( (team) => <Team datos={team} key={team.titulo} members={members.filter( member => member.equipo === team.titulo )} deleteMember={deleteMember} 
        updateColor={updateColor} like={like}/>)
      }
    <Footer/>
    </div>
  );
}

export default App;
