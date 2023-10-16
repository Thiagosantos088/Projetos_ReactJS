import Catalogo from "../Catalogo/Catalogo"
import JogosMortais from "../../images/JogosMortais10.png"
import Mercenarios from "../../images/os-mercenarios-4.jpg"
import VeF from "../../images/1512043-poster.png"
import Inter from "../../images/Interstellar_Filme.png"
import suits from "../../images/suits.jpg"
import lost from "../../images/lost.jpg"
import mirror from "../../images/black.png";
import prison from "../../images/temporada-3.png"
import cego from "../../images/4653775.jpg"
import cidade from "../../images/19871131.png"
import peaky from "../../images/peaky.jpg"
import barbie from "../../images/barbie.jpg"
import oppem from "../../images/Oppenheimer-min.jpg"
import freira from "../../images/a-freira-2_1.jpg"


import './Main.css'
function Main (){

        const filmes =[
            
            {nome:"Jogos Mortais", img: JogosMortais , ano: "2023" },
            {nome:"Mercenarios 4", img: Mercenarios , ano: "2023" },
            {nome:"Velozes e Furiosos", img: VeF , ano: "2011" },
            {nome:"Interstelar", img: Inter , ano: "2014" },
            {nome:"Barbie", img: barbie , ano: "2023" },
            {nome:"Oppenheimer", img: oppem , ano: "2023" },
            {nome:"A Freira 2", img: freira , ano: "2023" }

        ]
        const series =[
            
            {nome:"Suits", img: suits , ano: "2011"},
            {nome:"Lost", img: lost , ano: "2004"},
            {nome:"Black Mirror", img: mirror , ano: "2011"},
            {nome:"Ponto Cego", img: cego , ano: "2015"},
            {nome:"Cidade dos homens", img: cidade , ano: "2002"},
            {nome:"Peaky Blinders", img: peaky , ano: "2013"},
            {nome:"Prison Break", img: prison , ano: "2005"}
        ]

    return(
    <>
    
    <Catalogo listaF={filmes} titulo="Filmes"/>
    
    
    <Catalogo listaF={series} titulo="Series"/>
    
        </>
        )
}

export default Main