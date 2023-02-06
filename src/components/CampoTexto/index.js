import { useState } from 'react'
import './style.css'
import Form from 'react-bootstrap/Form';
const CampoTexto = (props) => {
    
    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
        
    }
    return (
        
        <Form.Group className="campo-texto">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></Form.Control>
        </Form.Group>
        
    )
}

export default CampoTexto