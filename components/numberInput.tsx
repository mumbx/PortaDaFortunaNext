import style from '../styles/NumberInput.module.css'

interface NumberInputProps{
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function NumberInput(props: NumberInputProps){
    
    const dec = ()=>props.onChange(props.value - 1)
    const inc = ()=>props.onChange(props.value + 1)

    return(
        <div className={style.numberInput}>
         <span className={style.text}>
            {props.text}
         </span>
         <span className={style.value}>
            {props.value}
         </span>
         <div className={style.botoes}>
             <button className={style.botao} onClick={dec}>-</button>
             <button className={style.botao} onClick={inc}>+</button>
         </div>
        </div>

    )
}