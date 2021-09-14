import Card from "../components/Card";
import styles from '../styles/Form.module.css'
import Link from 'next/link'
import NumberInput from '../components/numberInput'
import { useState } from "react";

export default function Form() {

  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)
  return (
    <div className={styles.form}>    
         <div>
              <Card bgColor='#c0392c'>
              <h2>Monty Hall</h2></Card>
              <Card> 
                <NumberInput 
                  value={qtdePortas}
                  text='Qtda de Portas?'
                  onChange={novoValor => setQtdePortas(novoValor)} 
                  />
              </Card>
          </div>

         <div>
           <Card> 
           <NumberInput 
                  value={comPresente}
                  text='Porta com Presente?'
                  onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} 
                  />
           </Card>
            <Card bgColor='#28a085' >
              <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref >
                <h2 className={styles.h2}>Iniciar</h2>
              </Link>
            </Card>
           </div>
    </div>
  )
}
