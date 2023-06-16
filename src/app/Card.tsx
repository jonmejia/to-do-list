const Card = (props:any) =>{
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2">
            <h2 className="text-center">{props.data}</h2>
        </div>
    )
}
export default Card;