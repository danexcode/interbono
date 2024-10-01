interface ClienteIdProps {
    params: {
        id: string
    };

    searchParams?: object
}

export default function ClienteId(props: ClienteIdProps){
    const { id } = props.params
    return(
        <h1>Cliente id: {id}</h1>
    )
}