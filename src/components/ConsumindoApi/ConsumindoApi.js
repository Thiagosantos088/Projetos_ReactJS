import { useState } from "react";
import axios from 'axios';
import './ConsumindoApi.css';

function ConsumindoApi(){
    const [buscaCep, setBuscaCep] = useState();
    const api = `https://viacep.com.br/ws/${buscaCep}/json/`;
    const [data, setData] = useState([]);

    function buscaApi(e){
        e.preventDefault();
        console.log(api);

        axios.get(api)
        .then(response => {
            console.log(response.data);
            setData(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return(
        <>
        <form>
            <label>Pesquisar Cep: </label>
            <br/>
            <input className="texto" type="number"  placeholder="Insira o Cep" value={buscaCep} onChange={(e) => setBuscaCep(e.target.value)}/>
            <br/>
            <button className="btn" onClick={buscaApi}>Pesquisar</button>
            
        </form>
        
        <p>{data.length === 0 ? "Digite um cep para buscar"
            :
            `${data.logradouro} ${data.bairro} ${data.complemento} ${data.localidade} ${data.uf} ${data.ibge} ${data.gia} ${data.ddd} ${data.siafi}`}</p>
        
        </>
    )
}

export default ConsumindoApi;