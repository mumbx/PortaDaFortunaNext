import style from '../styles/Card.module.css'

export default function Card(props){
    return(
        <div className={style.card} 
        style={{backgroundColor: props.bgColor ?? '#fff'}}
        >
         {props.children}
        </div>

    )
}