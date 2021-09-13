import { useState } from "react"
import style from '../styles/jogo.module.css'
import Porta from "../components/Porta"
import { atualizarPortas, criarPortas } from "../functions/portas"
import Link from 'next/link'

export default function jogo(){
    const [portas, setPortas] = useState(criarPortas(3, 2))    

    function renderizarPortas(){
      return portas.map(porta =>{
        return <Porta 
        key={porta.numero} 
        value={porta} 
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
        />
      })
    }
  
    return (
      <div id={style.jogo}>    
        <div className={style.portas}>
        {renderizarPortas()}  
           
        </div>  
        <div className={style.botoes}> 
        <Link href='/'>
            <button>Reiniciar o Jogo</button>
        </Link> 
        </div>         
      </div>
    )

}