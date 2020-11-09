import React, { Fragment } from 'react'
import {TextField, Button} from '@material-ui/core';
import './componentsCss/Card.css'

export default props => {
    return(
        <div className="Card">
            <form className="formCard" noValidate autoComplete="off">
                <TextField id="outlined-basic" label={props.title} variant="outlined" onChange={
                    props.title === "Cartão de crédito" ?
                    e => props.alterarCartao(+e.target.value):
                    props.title === "Outros Gastos" ?
                    e => props.alterarGastos(+e.target.value): e => props.alterarSaldo(+e.target.value)
                } value={props.valor}/>

                {
                    props.title === "Cartão de crédito" ?
                    <Button variant="contained" color="secondary" onClick={ e => props.pagarCartao(props.valor)}>Pagar</Button>:
                    props.title === "Outros Gastos" ?
                    <Button variant="contained" color="secondary" onClick={ e => props.pagarGastos(props.valor)}>Pagar</Button>: ""
                }
            </form>
        </div>
    );
}