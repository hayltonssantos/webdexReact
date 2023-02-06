import './style.css'
import CampoTexto from '../CampoTexto'
import Dropdown from '../Dropdown'
import Botao from '../Botao'
import { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
const Formulario = (props) => {

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log(img)
        if (img === ""){
            img = "img/semImage.jpg"
        }
        props.aoColaboradorCadastrado({
            nome, img, tipo
        })

        setNome('')
        setImg('')
        setTipo('')
    }

    const [nome, setNome] = useState('') //necessario para ver se o campo esta sendo alterado
    let [img, setImg] = useState('')
    const [tipo, setTipo] = useState('')


    return (
        <Container className='formulario'>
            <Form onSubmit={aoSalvar}>
                <h2>Adicione o pokemon</h2>
                <CampoTexto
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={nome => setNome(nome)}
                 />
                <CampoTexto 
                    obrigatorio={false} 
                    label="Imagem"  
                    placeholder="Selecione o arquivo"
                    valor={img}
                    aoAlterado={img => setImg(img)}
                />
                <Dropdown 
                    obrigatorio={true} 
                    label="Tipo" 
                    itens={props.tipos}
                    valor={tipo}
                    aoAlterado={tipo => setTipo(tipo)}
                />
                <Botao>
                    Adicionar
                </Botao>
            </Form>
        </Container>
    )
}

export default Formulario