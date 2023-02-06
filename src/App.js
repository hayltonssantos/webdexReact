import Banner from './components/Banner';
import Formulario from './components/Formulario';
import { useState } from 'react';
import Time from './components/Time';

function App() {
  const tipos = [
    {
      nome:"Bug",
      primaryColor:"#57c278",
      secondColor:"#D9F7E9"
    },
    {
      nome:"Ice",
      primaryColor:"#82CFFA",
      secondColor:"#E8F8FF"
    },
    {
      nome:"Grass",
      primaryColor:"#A6D157",
      secondColor:"#F0F8E2"
    },
    {
      nome:"Fire",
      primaryColor:"#E06B69",
      secondColor:"#FDE7E8"
    },
    {
      nome:"Poison",
      primaryColor:"#DB6EBF",
      secondColor:"#FAE9F5"
    },
    {
      nome:"Eletric",
      primaryColor:"#FFBA05",
      secondColor:"#FFF5D9"
    },
    {
      nome:"Normal",
      primaryColor:"#81525B",
      secondColor:"#DC97A9"
    },
    {
      nome:"Dark",
      primaryColor:"#010204",
      secondColor:"#585879"
    },
    {
      nome:"Flying",
      primaryColor:"#37677E",
      secondColor:"#86B3C8"
    },
    {
      nome:"Dragon",
      primaryColor:"#018B96",
      secondColor:"#00CCDD"
    },
    {
      nome:"Ghost",
      primaryColor:"#018B96",
      secondColor:"#9E6794"
    },
    {
      nome:"Psychic",
      primaryColor:"#C21E70",
      secondColor:"#FE1895"
    },
    {
      nome:"Rock",
      primaryColor:"#531204",
      secondColor:"#9E3C16"
    },
    {
      nome:"Fairy",
      primaryColor:"#B21244",
      secondColor:"#FC0A6C"
    },
    {
      nome:"Ground",
      primaryColor:"#7A4614",
      secondColor:"#B97021"
    },
    {
      nome:"Steel",
      primaryColor:"#537770",
      secondColor:"#05BB91"
    },
    {
      nome:"Water",
      primaryColor:"#0252E5",
      secondColor:"#73AAFA"
    }
  ]
  const [pokemons, setPokemon] = useState([
    {
      nome: "Caterpie",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
      tipo: "Bug" 
    },
    {
      nome: "Ninetales ",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
      tipo: "Ice" 
    },
    {
      nome: "Chikorita ",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png",
      tipo: "Grass" 
    },
    {
      nome: "Charizard",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
      tipo: "Fire" 
    },
    {
      nome: "Nidoqueen",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
      tipo: "Poison" 
    },
    {
      nome: "Raichu",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
      tipo: "Eletric" 
    },
    {
      nome: "Rattata",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
      tipo: "Normal" 
    },
    {
      nome: "Mightyena",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/262.png",
      tipo: "Dark" 
    },
    {
      nome: "Corvisquire",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/822.png",
      tipo: "Flying" 
    },
    {
      nome: "Druddigon",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/621.png",
      tipo: "Dragon" 
    },
    {
      nome: "Duskull",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/355.png",
      tipo: "Ghost" 
    },
    {
      nome: "Mega Alakazam",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065_f2.png",
      tipo: "Psychic" 
    },
    {
      nome: "Sudowoodo",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/185.png",
      tipo: "Rock" 
    },
    {
      nome: "Clefable",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
      tipo: "Fairy" 
    },
    {
      nome: "Perrserker",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/863.png",
      tipo: "Ground" 
    },
    {
      nome: "Dugtrio",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png",
      tipo: "Steel" 
    },
    {
      nome: "Huntail",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/367.png",
      tipo: "Water" 
    },
  ])

  const novoPokemon = (pokemon) => {
    console.log(pokemon)
    setPokemon([...pokemons,pokemon])
  }
  return (
    <div className="App" style={{backgroundColor: "#FA0032"}}>
      <Banner />
      <Formulario tipos={tipos.map(tipo => tipo.nome)} aoColaboradorCadastrado={pokemon => novoPokemon(pokemon)}/>
      {tipos.map(tipo => <Time
        key={tipo.nome} 
        nome={tipo.nome} 
        primaryColor={tipo.primaryColor} 
        secondColor={tipo.secondColor}
        pokemons={pokemons.filter(pokemon =>  pokemon.tipo === tipo.nome)}
      />)}
    </div>
  )
}
export default App;
