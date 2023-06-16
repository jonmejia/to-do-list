const Card = (props:any) =>{
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="text-center">{props.data}</h2>
        </div>
    )
}
export default Card;