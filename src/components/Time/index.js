import Colaborador from '../Pokemon'
import './style.css'

const Time = (props) => {
    const css = {backgroundColor: props.secondColor}
    const cssH3 = {borderColor: props.primaryColor}
    return(
        //renderizaão condicional 
        <section className='tipo' style={css}>
            <h3 style={cssH3}>{props.nome}</h3>
            <div className='pokemons'>
                {props.pokemons.map(pokemon => <Colaborador corDeFundo={props.primaryColor} key={pokemon.nome}
                    nome={pokemon.nome} 
                    cargo={pokemon.cargo} 
                    img={pokemon.img}
                />)}
            </div>
        </section>
    )
}
export default Time