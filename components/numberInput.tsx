import style from '../styles/NumberInput.module.css'

interface NumberInputProps{
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function numberInput(props: NumberInputProps){
    return(
        <div className={style.numberInput}>
         <span className={style.text}>
            {props.text}
         </span>
         <span className={style.value}>
            {props.value}
         </span>
        </div>

    )
}