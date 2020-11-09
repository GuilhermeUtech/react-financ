import React, { Fragment } from 'react'
import {TextField, Button} from '@material-ui/core';
import './componentsCss/Card.css'

export default props => {
    return(
        <div className="Card">
            <form className="formCard" noValidate autoComplete="off">
                <TextField id="outlined-basic" label={props.title} variant="outlined"/>
                {
                    props.title === "Cartão de crédito" || props.title === "Outro Gastos" ?
                    <Button variant="contained" color="secondary">Pagar</Button>:""
                }
            </form>
        </div>
    );
}