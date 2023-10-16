import ExibeCatalogo from "../ExibeCatalogo/ExibeCatalogo";
import './Catalogo.css'

function Catalogo({listaF, titulo}){
    
    return(
    <>
    <h1>{titulo}</h1>
    <div className='div-exibe' >
    {listaF.map((f)=>
    <ExibeCatalogo img={f.img} nome={f.nome}  ano={f.ano}/>)}

    </div>
    </>

    )
}
export  default Catalogo; 