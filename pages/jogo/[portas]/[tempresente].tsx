import { useEffect, useState } from "react"
import style from '../../../styles/jogo.module.css'
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import Link from 'next/link'
import { useRouter } from "next/router"

export default function Jogo(){

    const router = useRouter()
  
    const [valido, setValido] = useState(false)    
    const [portas, setPortas] = useState([])    
    
    useEffect(()=>{
      const portas = +router.query.portas
      const temPresente = +router.query.tempresente

      const qtdePortasValida = portas >= 3 && portas <= 100
      const temPresenteValido = temPresente >= 1 && temPresente <= portas

      setValido(qtdePortasValida && temPresenteValido)

    }, [portas, router.query.portas, router.query.tempresente])

    useEffect(()=>{
      const portas = +router.query.portas
      const temPresemte = +router.query.tempresente
      setPortas(criarPortas(portas, temPresemte))

    }, [router?.query])

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
        {valido ? renderizarPortas() : <h2>Valores inválidos</h2>}  
           
        </div>  
        <div className={style.botoes}> 
        <Link href='/' passHref>
            <button>Reiniciar o Jogo</button>
        </Link> 
        </div>         
      </div>
    )

}