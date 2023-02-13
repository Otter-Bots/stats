export default function ListOfBots(props: {data: any}) {
    if (!props.data) {
        return (
            <></>
        )
    } else {       
        return (
            <>
                {props.data.map((bot: any) => (
                    <option key={bot}>{bot}</option>
                ))}
            </>
        )
    }
    return (<></>)
}