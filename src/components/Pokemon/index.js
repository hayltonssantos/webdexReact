import './style.css'

const Colaborador = ({nome, img, tipo,corDeFundo}) => {
    return(
        <div className='cardsTypes'>
            <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
                <img src={img} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{tipo}</h5>
            </div>
        </div>
    )

}
export default Colaborador