import React from 'react'
import {TextField, Button, InputLabel, Select, MenuItem} from '@material-ui/core';
import './componentsCss/AddGasto.css'

export default props => {
    return(
        <div className="AddGasto">
            <h2>Adicionar novo gasto</h2>  
            <TextField id="outlined-basic" label="Adicionar Gasto" variant="outlined"></TextField>
            <br/>
            <TextField id="outlined-basic" label="Adicionar Valor" variant="outlined"></TextField>

            <InputLabel id="label">Tipo do gasto</InputLabel>
            <Select labelId="label" id="select" value="20">
                <MenuItem>Cartão de Crédito</MenuItem>
                <MenuItem>Outro Gasto</MenuItem>
            </Select>
        </div>
    );
}