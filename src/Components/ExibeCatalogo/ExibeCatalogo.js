import "./ExibeCatalogo.css"
function ExibeCatalogo({nome, img, ano,}){
    return(
        <div>
        
        <div className="exibe">
            <img src={img} alt={nome}/>
            <h1>{nome}</h1>
            <h4>Ano: {ano}</h4>
        </div>

            </div>
        
    )
}
export default ExibeCatalogo;