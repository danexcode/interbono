
interface TransaccionProps {
    params: {
        id: string
    }
}

export default function Transaccion(props: TransaccionProps){
    const { id } = props.params
    return(
        <h1>Transacciones id: {id}</h1>
    )
}