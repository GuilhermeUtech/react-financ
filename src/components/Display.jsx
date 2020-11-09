import React, { useState, Fragment } from "react";
import Card from './Card'
import AddGasto from './AddGasto'
import './componentsCss/Display.css'

export default props => {

    const [saldo, setSaldo] = useState()
    const [cartao, setCartao] = useState()
    const [gastos, setGastos] = useState()

    function alterarSaldo(e){
        setSaldo(e)
    }
    function alterarCartao(e){
        setCartao(e)
    }
    function alterarGastos(e){
        setGastos(e)
    }

    function pagarGastos(e){
        if(saldo - e >= 0){
            setSaldo(saldo - e)
            setGastos(0)
        }
    }

    function pagarCartao(e){
        if(saldo - e >= 0){
            setSaldo(saldo - e)
            setCartao(0)
        }
    }

    return(
        <Fragment>
            <div className="displayCards">
            <h2>Controle financeiro</h2>
            <Card 
                title="Saldo"
                alterarSaldo={alterarSaldo}
                valor={saldo}>
            </Card>

            <Card
                title="Cartão de crédito"
                alterarCartao={alterarCartao}
                valor={cartao}
                pagarCartao={pagarCartao}> 
            </Card>

            <Card
                title="Outros Gastos"
                alterarGastos={alterarGastos}
                valor={gastos}
                pagarGastos={pagarGastos}>
            </Card>
        </div>
        <div className="addNewBills">
            <AddGasto/>
        </div>
        </Fragment>
        
    );
}